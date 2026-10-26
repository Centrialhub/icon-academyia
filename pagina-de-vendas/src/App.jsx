import { useEffect, useRef, useState } from 'react';
import { AlertTriangle, ArrowRight, BookOpen, CalendarDays, Check, ChevronDown, Clock3, FileCheck2, FileText, GraduationCap, Headphones, Layers3, ListChecks, Mail, MessageSquareText, MonitorSmartphone, SearchCheck, ShieldCheck, Sparkles, Video, X, ZoomIn } from 'lucide-react';
import { content } from './content.js';
import { comercial, meetings } from './comercial.js';
import ScrollRail from './ScrollRail.jsx';

const painIcons = [Clock3, Layers3, SearchCheck, MessageSquareText, CalendarDays, AlertTriangle];
const mechanismIcons = [ListChecks, FileText, Sparkles, ShieldCheck];
function CTA({ label = 'Quero escolher meu acesso', href = '#oferta', className = '' }) {
  return <a className={`btn ${className}`} href={href}>{label}<ArrowRight size={19} aria-hidden="true"/></a>;
}
function SectionTitle({ children, lead }) {
  return <header className="section-title"><h2>{children}</h2>{lead && <p>{lead}</p>}</header>;
}
function ProductComposition({ compact = false, collection = false }) {
  return <div className={`product-composition${compact ? ' product-composition--compact' : ''}${collection ? ' product-composition--collection' : ''}`} role="img" aria-label="Capa e páginas reais do ÍCON Essencial: guia, prompts e checklist">
    <img className="product-sheet product-sheet--left" src="/assets/prompts.webp" alt="" width="900" height="1273" loading={compact || collection ? 'lazy' : undefined}/>
    <img className="product-sheet product-sheet--middle" src="/assets/planejamento.webp" alt="" width="900" height="1800" loading={compact || collection ? 'lazy' : undefined}/>
    <img className="product-sheet product-sheet--right" src="/assets/checklist.webp" alt="" width="900" height="1273" loading={compact || collection ? 'lazy' : undefined}/>
    <div className="real-book"><img className="product-cover" src="/assets/guia-capa.webp" alt="" width="900" height="1800" loading={compact || collection ? 'lazy' : undefined} fetchPriority={!compact && !collection ? 'high' : undefined}/></div>
  </div>;
}
function FullPage({ page, open, ...props }) {
 return <figure className="gallery-card" {...props} inert={props["aria-hidden"] ? true : undefined}><button type="button" className="page-preview" onClick={open} aria-label={`Ampliar: ${page.title}`}><img src={page.src} alt={page.title} width="900" height="1800" loading="lazy"/><span className="zoom-label"><ZoomIn size={16} aria-hidden="true"/>Ampliar página real</span></button><figcaption><strong>{page.title}</strong><span>{page.description}</span></figcaption></figure>;
}
function PreviewDialog({ page, close }) {
 const ref=useRef(null);
 useEffect(()=>{ if(page){ref.current.showModal();const old=document.body.style.overflow;document.body.style.overflow='hidden';return()=>{document.body.style.overflow=old;};}},[page]);
 return <dialog ref={ref} className="preview-dialog" onCancel={close} onClick={e=>{if(e.target===e.currentTarget)close();}}><div className="dialog-bar"><h2>{page?.title}</h2><button onClick={close} aria-label="Fechar página ampliada"><X/></button></div>{page && <img src={page.src} alt={page.title}/>}</dialog>;
}
function CheckoutButton({ plan }) {
 const url = plan.checkoutUrl;
 if (!url) return <div className="sales-pending"><button className="btn" type="button" disabled>Vendas em breve</button><p>O acesso à compra será disponibilizado nesta página.</p></div>;
 // Encaminhar somente parâmetros de atribuição, sem transmitir parâmetros pessoais arbitrários.
 const destination = new URL(url);
 const params = new URLSearchParams(window.location.search);
 for(const [key,value] of params) if(/^(utm_(source|medium|campaign|content|term|id)|fbclid|gclid|src|sck)$/.test(key)) destination.searchParams.set(key,value);
 return <CTA label={plan.cta} href={destination.toString()}/>;
}
function Plan({ formation = false }) {
 const plan=formation ? comercial.formation : comercial.essential;
 return <article className={`plan-card ${formation ? 'plan-card--featured' : ''}`} id={plan.id}>
  <p className="plan-badge">{formation ? 'APRENDA E PRATIQUE COM ORIENTAÇÃO' : 'SEU PRIMEIRO PASSO NA IA'}</p>
  <p className="plan-kicker">{plan.label}</p><h3>{plan.name}</h3><p className="plan-description">{formation ? 'O kit Essencial, ampliado com aulas e encontros para aplicar na sua escola.' : 'Um kit para aprender, consultar e adaptar à sua rotina escolar.'}</p>
  <div className="plan-mockup"><ProductComposition compact/>{formation && <div className="class-overlay"><Video size={18}/><span>4 aulas + 4 encontros</span></div>}</div>
  <ul>{(formation ? content.formationIncluded : content.essentialIncluded).map(item=><li key={item}><Check size={19} aria-hidden="true"/><span>{item}</span></li>)}</ul>
  {formation && <p className="release-note"><CalendarDays size={17} aria-hidden="true"/><span>Turma de novembro de 2026.<br/>Gravadas em 03/11. Primeiro ao vivo em 09/11.</span></p>}
  <div className="plan-bottom"><div className="price"><small>Pagamento único</small><strong>{plan.price}</strong><span>{formation ? 'Formação completa de 12 horas' : 'Materiais digitais para estudo autônomo'}</span></div>
  <CheckoutButton plan={plan}/>
  <div className="payment-trust"><span><ShieldCheck size={17}/>7 dias de garantia</span><span><MonitorSmartphone size={17}/>Conteúdo digital</span></div></div>
 </article>;
}
export default function App() {
 const [page,setPage]=useState(null);
 return <>
  <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
  <main id="conteudo">
   <section className="hero"><div className="content content--1040 hero-flow">
    <p className="hero-pill">{content.hero.badge}</p>
    <h1>{content.hero.titleBefore}<em>{content.hero.titleEmphasis}</em></h1>
    <div className="hero-media"><ProductComposition/></div>
    <p className="hero-sub">{content.hero.subtitle}</p>
    <CTA label="Quero ver os materiais" href="#previas"/>
    <ul className="hero-bullets">{content.hero.bullets.map(item=><li key={item}><Check size={20} aria-hidden="true"/><span>{item}</span></li>)}</ul>
    <p className="scope-line">{content.hero.scope}</p>
   </div></section>

   <section className="section pain"><div className="content content--880 section-flow">
    <SectionTitle>{content.pain.title}</SectionTitle>
    <div className="pain-grid">{content.pains.map((item,i)=>{const Icon=painIcons[i];return <div className="pain-chip" key={item}><Icon size={18} aria-hidden="true"/><span>{item}</span></div>;})}</div>
    <p className="bridge">{content.pain.bridge}</p>
   </div></section>

   <section className="section section--tint gallery" id="previas"><div className="content content--1180 section-flow">
    <SectionTitle lead="Estas são páginas reais do kit Essencial, também incluído na formação. Toque para ampliar e ler.">Veja o material por dentro.</SectionTitle>
    <ScrollRail label="Prévias reais dos materiais" className="gallery-rail" auto interval={4500}>{content.gallery.map(item=><FullPage page={item} key={item.src} open={()=>setPage(item)}/>)}</ScrollRail>
   </div></section>

   <section className="section mechanism"><div className="content content--1120 section-flow">
    <SectionTitle>Uma tarefa escolar.<br className="desktop-break"/> Um caminho de aplicação.</SectionTitle>
    <div className="mechanism-layout"><button className="mechanism-page" onClick={()=>setPage(content.gallery[1])} aria-label="Ampliar o prompt real"><img src="/assets/prompt-exemplo.webp" alt="Exemplo real de comando completo da biblioteca" loading="lazy" width="900" height="1273"/><span><ZoomIn size={16}/>Ver o comando completo</span></button>
    <div className="mechanism-grid">{content.mechanism.map(([title,text],i)=>{const Icon=mechanismIcons[i];return <article key={title}><span className="mechanism-icon"><Icon size={23} aria-hidden="true"/></span><div><h3><span>{String(i+1).padStart(2,'0')}.</span> {title}</h3><p>{text}</p></div></article>;})}</div></div>
    <p className="mechanism-close">{content.mechanismClose}</p><CTA/>
   </div></section>

   <section className="section mid-pitch"><div className="content content--1040 mid-pitch-grid">
    <div className="mid-pitch-media"><img src="/assets/roteiro.webp" alt="Primeira página do roteiro de aplicação" loading="lazy" width="900" height="1273"/><img src="/assets/guia-capa.webp" alt="Capa oficial do guia" loading="lazy" width="900" height="1800"/></div>
    <div className="mid-pitch-copy"><h2>{content.pitch.title}</h2><p>{content.pitch.text}</p><CTA/></div>
   </div></section>

   <section className="section audiences"><div className="content content--1040 section-flow">
    <SectionTitle>Para quem ensina, coordena<br className="desktop-break"/> ou dirige uma escola.</SectionTitle>
    <div className="audience-grid">{content.audiences.map(([title,text])=><article key={title}><span><Check size={17} aria-hidden="true"/></span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
   </div></section>

   <section className="section section--tint receive"><div className="content content--1000 section-flow">
    <SectionTitle>Da primeira conversa com a IA<br className="desktop-break"/> às tarefas da sua escola.</SectionTitle>
    <div className="receive-media"><ProductComposition collection/></div>
    <article className="receive-card"><p className="access-badge">60 PÁGINAS • 10 CAPÍTULOS</p><h3>Um guia para acompanhar fazendo.</h3><p>O mesmo guia principal está incluído nas duas opções de acesso.</p><ul>{content.benefits.map(item=><li key={item}><Check size={20} aria-hidden="true"/><span>{item}</span></li>)}</ul></article>
   </div></section>

   <section className="section bonuses"><div className="content content--1180 section-flow">
    <SectionTitle lead="Complementos do kit para passar da leitura à execução. Incluídos no Essencial e na Formação.">Além de aprender,<br className="desktop-break"/> tenha de onde começar.</SectionTitle>
    <div className="bonus-grid">{content.complements.map(item=><article className="bonus-card" key={item.title}>
     <div className={`bonus-card-top ${item.image ? '' : 'bonus-card-top--documents'}`}>{item.image ? <img src={item.image} alt={`Página real: ${item.title}`} width="900" height="1273" loading="lazy"/> : <div className="document-inventory"><FileText size={42} aria-hidden="true"/><strong>Estruturas para editar</strong><ul><li>Plano de aula</li><li>Atividade escolar</li><li>Gabarito separado</li><li>Comunicado às famílias</li></ul><span>4 arquivos em Word</span></div>}</div>
     <div className="bonus-card-body"><h3>{item.title}</h3><p>{item.text}</p><div className="bonus-gain"><Check size={18} aria-hidden="true"/><span>{item.gain}</span></div><div className="bonus-price"><strong>INCLUÍDO NO KIT</strong></div></div>
    </article>)}</div>
   </div></section>

   <section className="section offer" id="oferta"><div className="content content--1120 section-flow">
    <SectionTitle lead="Estude no seu ritmo com o Essencial ou pratique com aulas e encontros na Formação.">Escolha como você<br className="desktop-break"/> quer começar.</SectionTitle>
    <div className="value-stack"><p>DUAS FORMAS DE APRENDER. UMA BASE EM COMUM.</p><div className="value-stack-summary"><BookOpen size={25} aria-hidden="true"/><span>As duas opções incluem o guia e o kit Essencial.<br/><strong>A formação amplia os materiais e acrescenta aulas, encontros e projeto.</strong></span></div></div>
    <div className="plans-grid"><Plan/><Plan formation/></div>
    <p className="offer-close">Os 60 prompts e os 24 modelos são os totais da Formação. Não são adicionais ao Essencial.</p>
    <div className="formation-detail" id="cronograma"><header><p>FORMAÇÃO ÍCON • TURMA DE NOVEMBRO</p><h3>Aprenda nas aulas.<br/>Aplique nos encontros.</h3><span>Quatro aulas gravadas a partir de {comercial.recordedRelease}.<br/>Quatro segundas-feiras de prática e tira-dúvidas.</span></header>
     <div className="formation-columns"><div className="recorded-block"><Video size={25} aria-hidden="true"/><h4>4 aulas gravadas</h4><p>Liberação em 3 de novembro</p><ol>{content.recorded.map(item=><li key={item}>{item}</li>)}</ol></div>
     <div className="live-block"><div className="live-heading"><CalendarDays size={25} aria-hidden="true"/><div><h4>4 encontros ao vivo</h4><p>{comercial.liveTime} • {comercial.timezone}</p></div></div><ol>{meetings.map(m=><li key={m.date}><time dateTime={m.iso}>{m.date}<small>SEGUNDA</small></time><div><h5>{m.title}</h5><p>{m.text}</p></div></li>)}</ol></div></div>
     <div className="formation-outcomes"><span><Layers3 size={20}/>60 prompts no total</span><span><FileText size={20}/>24 modelos no total</span><span><Sparkles size={20}/>5 assistentes configuráveis</span><span><GraduationCap size={20}/>Certificado de curso livre</span></div>
     <p className="certification-note">12 horas: 2h de aulas gravadas, 6h de encontros, 2h de exercícios e 2h de projeto. Certificado mediante conclusão do percurso e entrega do projeto.</p>
     <p className="preorder-note">Pré-venda da formação. O kit Essencial é entregue após a confirmação do pagamento. As aulas gravadas começam em 03/11; os materiais avançados serão liberados durante a formação, com calendário informado antes da compra.</p>
     <CTA label="Quero comparar os acessos"/>
    </div>
   </div></section>

   <section className="section purchase-safety"><div className="content content--1040 safety-layout">
    <article className="guarantee-card"><div className="guarantee-seal" aria-label="Garantia de 7 dias"><ShieldCheck size={32} aria-hidden="true"/><strong>{comercial.guaranteeDays}</strong><span>DIAS DE GARANTIA</span></div><div><h2>Conheça o material<br/>com tranquilidade.</h2><p>Você tem 7 dias após a compra para solicitar o reembolso pelo procedimento indicado na plataforma de compra.</p></div></article>
    <div className="safety-cards"><article><Headphones size={29} aria-hidden="true"/><div><h3>Suporte dedicado</h3><p>Ajuda com acesso e uso dos materiais. Na formação, os encontros também têm espaço para dúvidas.</p></div></article><article><FileCheck2 size={29} aria-hidden="true"/><div><h3>Seu olhar continua essencial</h3><p>A IA ajuda a produzir. Você confere as informações e decide o que faz sentido para a sua escola.</p></div></article></div>
   </div></section>

   <section className="section section--tint access-steps"><div className="content content--980 section-flow"><SectionTitle>Da compra à primeira aplicação.</SectionTitle><div className="steps-grid">
    <article><span>1</span><Mail aria-hidden="true"/><h3>Receba o acesso</h3><p>Após a confirmação do pagamento, siga as instruções da plataforma para acessar o kit Essencial.</p></article>
    <article><span>2</span><BookOpen aria-hidden="true"/><h3>Comece pelo roteiro</h3><p>Abra a primeira aplicação e acompanhe a criação de um comunicado com dados fictícios.</p></article>
    <article><span>3</span><MonitorSmartphone aria-hidden="true"/><h3>Leve para sua rotina</h3><p>Adapte e revise. Se escolheu a formação, acompanhe as liberações e os encontros da turma.</p></article>
   </div><CTA/></div></section>

   <section className="section faq"><div className="content content--860 section-flow"><SectionTitle>Antes de escolher,<br className="desktop-break"/> tire suas dúvidas.</SectionTitle><div className="faq-list">{content.faqs.map(([q,a])=><details key={q}><summary>{q}<ChevronDown size={19} aria-hidden="true"/></summary><p>{a}</p></details>)}</div></div></section>

   <section className="closing"><div className="content content--1000 closing-inner"><h2>{content.closing.title}</h2><p>{content.closing.text}</p><CTA label="Quero escolher meu acesso"/><small>Essencial por R$ 67,90. Formação por R$ 197,90. Pagamento único.</small></div></section>
  </main>
  <footer className="footer"><div className="footer-inner"><img src="/assets/logo-oficial.png" width="180" height="53" alt="ÍCON Academy" loading="lazy"/><p>Conhecimento para aplicar na vida real.</p><p className="footer-legal">Produto educacional independente, sem vínculo com a OpenAI. Ferramentas de terceiros têm condições e limites próprios. Resultados dependem do estudo, da aplicação e da revisão humana.</p>{comercial.company && <p>{comercial.company}</p>}<nav aria-label="Informações institucionais">{comercial.supportUrl && <a href={comercial.supportUrl}>Suporte</a>}{comercial.termsUrl && <a href={comercial.termsUrl}>Termos de uso</a>}{comercial.privacyUrl && <a href={comercial.privacyUrl}>Privacidade</a>}</nav><p>© 2026 ÍCON Academy.</p></div></footer>
  {page && <PreviewDialog page={page} close={()=>setPage(null)}/>}
 </>;
}
