# Encaixes definidos
| Função | Desktop | Mobile | Fonte e método |
|---|---|---|---|
| Hero | 570x300 | 320x245 | Capa real + biblioteca + planejamento + checklist, composição CSS rasa; o mobile omite uma folha |
| Galeria | Página270x540 | 75vw, razão1:2 | PDFs reais renderizados em900px, WebP88, contain, ampliação em diálogo |
| Mecanismo | 300x472 | 235x382 | Página4 real da biblioteca, sem regeneração |
| Pitch | 440x360 | 320x300 | Roteiro + capa, diferente da geometria do hero |
| Coleção | 660x350 | 320x270 | Composição de capas e páginas reais, sem selo dentro do raster |
| Complementos | Cards250px | Card270px | Páginas reais; modelos descritos textualmente porque não têm capa própria |
| Oferta |350x210 |300x210 | Variante compacta do conjunto real; rótulo de aulas em HTML |
| Garantia |132x158 |125x150 | Selo SVG Lucide e texto HTML,7dias |
Área segura: manter páginas dentro dos contêineres; transformações discretas. Capa e galeria com object-fit:contain. Composição é nativa para preservar texto e marca. Não utilizar as capas conceituais geradas em outras etapas. Preço, garantia e condições sempre em HTML. Não gerar imagens fictícias dos assistentes e materiais futuros.
