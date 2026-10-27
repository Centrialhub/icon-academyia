import { Children, cloneElement, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
export default function ScrollRail({ children, label, className = '', auto = false, interval = 2800, pagination = false }) {
  const ref = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [stopped, setStopped] = useState(false);
  const stoppedRef = useRef(false);
  const pausedRef = useRef(false);
  const visibleRef = useRef(false);
  const resumeTimerRef = useRef(null);
  const normalizeTimerRef = useRef(null);
  const items = Children.toArray(children);
  const renderedItems = auto
    ? [...items, ...items.map((child, index) => cloneElement(child, { key: `loop-${index}`, 'aria-hidden': true }))]
    : items;

  const cycleWidth = () => {
    const rail = ref.current;
    if (!rail || rail.children.length <= items.length) return 0;
    return rail.children[items.length].offsetLeft - rail.children[0].offsetLeft;
  };

  const normalize = () => {
    const rail = ref.current;
    const width = cycleWidth();
    if (!rail || !width) return;
    if (rail.scrollLeft >= width) rail.scrollLeft -= width;
  };

  const pauseTemporarily = () => {
    pausedRef.current = true;
    window.clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = window.setTimeout(() => { pausedRef.current = false; }, 4200);
  };

  const scheduleNormalize = () => {
    window.clearTimeout(normalizeTimerRef.current);
    normalizeTimerRef.current = window.setTimeout(normalize, 700);
  };

  const move = direction => {
    const rail = ref.current;
    if (!rail) return;
    pauseTemporarily();
    const width = cycleWidth();
    if (direction < 0 && width && rail.scrollLeft <= 2) rail.scrollLeft = width;
    rail.scrollBy({ left: direction * rail.clientWidth * .82, behavior: 'smooth' });
    scheduleNormalize();
  };

  useEffect(() => {
    if (!auto || !ref.current) return undefined;
    const rail = ref.current;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const observer = new IntersectionObserver(([entry]) => { visibleRef.current = entry.isIntersecting; }, { threshold: .18 });
    observer.observe(rail);
    const timer = window.setInterval(() => {
      if (reduceMotion.matches || stoppedRef.current || pausedRef.current || !visibleRef.current || document.hidden) return;
      const firstItem = rail.children[0];
      const secondItem = rail.children[1];
      const step = secondItem ? secondItem.offsetLeft - firstItem.offsetLeft : rail.clientWidth * .82;
      rail.scrollBy({ left: step, behavior: 'smooth' });
      scheduleNormalize();
    }, interval);
    return () => {
      observer.disconnect();
      window.clearInterval(timer);
      window.clearTimeout(resumeTimerRef.current);
      window.clearTimeout(normalizeTimerRef.current);
    };
  }, [auto, interval, items.length]);

  return <div className={`rail-stage ${className}`}>
    <button type="button" className="rail-arrow rail-arrow--left" onClick={() => move(-1)} aria-label={`Ver anteriores em ${label}`}><ChevronLeft /></button>
    <div
      onScroll={pagination ? event => {
        const rail = event.currentTarget;
        const first = rail.children[0];
        const next = rail.children[1];
        const step = next ? next.offsetLeft - first.offsetLeft : rail.clientWidth;
        setActiveIndex(Math.min(items.length - 1, Math.max(0, Math.round(rail.scrollLeft / step))));
      } : undefined}
      role="region"
      onKeyDown={event => { if (event.key === "ArrowRight" || event.key === "ArrowLeft") { event.preventDefault(); move(event.key === "ArrowRight" ? 1 : -1); } }}
      className={`rail${auto ? ' rail--loop' : ''}`}
      ref={ref}
      tabIndex="0"
      aria-label={label}
      onMouseEnter={() => { pausedRef.current = true; }}
      onMouseLeave={() => { pausedRef.current = false; }}
      onFocus={() => { pausedRef.current = true; }}
      onBlur={() => { pausedRef.current = false; }}
      onPointerDown={() => { pausedRef.current = true; }}
      onPointerUp={pauseTemporarily}
      onTouchEnd={pauseTemporarily}
    >{renderedItems}</div>
    {pagination && <div className="rail-pagination"><span>Deslize para explorar</span><div role="group" aria-label="Escolher complemento">{items.map((_, i) => <button key={i} type="button" aria-label={`Ver complemento ${i + 1} de ${items.length}`} aria-current={activeIndex === i ? 'true' : undefined} onClick={() => {
      const rail = ref.current;
      rail.scrollTo({left: rail.children[i].offsetLeft - rail.children[0].offsetLeft, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});
    }}><span/></button>)}</div><strong>{activeIndex + 1} / {items.length}</strong></div>}
    {auto && <button type="button" className="rail-pause" aria-label={stopped ? "Retomar carrossel" : "Pausar carrossel"} aria-pressed={stopped} onClick={() => { stoppedRef.current = !stopped; setStopped(!stopped); }}>{stopped ? <Play size={15}/> : <Pause size={15}/>}<span>{stopped ? "Retomar" : "Pausar"}</span></button>}
    <button type="button" className="rail-arrow rail-arrow--right" onClick={() => move(1)} aria-label={`Ver próximos em ${label}`}><ChevronRight /></button>
  </div>;
}

