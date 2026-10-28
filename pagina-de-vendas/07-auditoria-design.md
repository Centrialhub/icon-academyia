# Auditoria
Modo: página nova a partir do starter oficial. Dials4/3/5. Paleta violeta/preto aprovada, Montserrat local, Lucide. Headlines/duas ofertas conforme aprovação explícita.

## Verificado
- Build Vite de produção concluída.
- Desktop1363px e frames com largura360,430,768px inspecionados pelo navegador. Frames validam breakpoints e leitura, não equivalem a teste em aparelhos físicos.
- Hero CTA aponta para#previas; intermediários apontam para#oferta. Só os cards recebem URL externa quando configurada.
- Páginas reais sem recorte, com ampliação emdialog; abertura/fechamento testados.
- Carrossel com loop, setas, navegação por teclado, pausa e swipenativo; clones ocultos e inertes para leitores de tela.
- FAQ nativo acessível, informações das ofertas e cronograma conferidos.
- Sem falso depoimento, preço riscado, contador reiniciável,urgênciafabricada ou assinatura vitalícia.
- Zero imagens quebradas no carregamento de desktop. Sem erros de aplicação observados; console possui erros da extensão do ambiente, não da página.
- Redução de movimento respeitada nos carrosséis e transições; foco visível.
- Texto principal14–16px; rótulos e notas menores. Ícones não são emojis. Logo oficial preservada.
- Sombras fortes restritas às composições; raios10/18/26px. Micro-rótulos informam produto e planos; não há numeração decorativa de seções.

## Limites e pendências
- Checkout ainda não informado:botõesdecompra mostramVendasembreve, sem URL fictícia. Não houve teste de compra ou atribuição em checkout real.
- Canal de suporte,dados legais,termos,privacidade,prazo de acesso,plataforma dos encontros e datas de liberação dos avançados ainda não fornecidos. Registrar antes de ativar vendas.
- Lighthouse não executado: nenhuma pontuação ou CoreWebVitalsdeprodução é alegada.
- Não coletar dados ou instalar pixels sem IDs e finalidade definidos. Repasse de UTMs fica restrito a chaves de atribuição permitidas quando o checkout for configurado.
- Prova social e comparador honestamente omitidos. Modelo Word é descrito por inventário, sem capa ou páginas fictícias.

## Refinamento solicitado em 26/10/2026
Mockups receberam palco, base e sombra de contato em CSS, mantendo páginas reais. Prompt centralizado acima das etapas. Planos com altura natural e preço imediatamente após o conteúdo, removendo o preenchimento artificial. Botões com brilho periódico, aura discreta e resposta de hover/foco; entradas por IntersectionObserver com fallback visível e redução de movimento. Botões desativados não animam. O checkout Essencial já foi configurado com a URL fornecida pelo usuário; o checkout Formação continua pendente. Build revisada e medições dos planos confirmam ausência do espaço artificial entre lista e preço.


## Vitrine dos materiais — 27/10/2026
Substituída a composição de folhas inclinadas e base oval por volumes editoriais alinhados em uma superfície retangular comum. Capa e páginas autênticas preservadas, com proporção original 1:2, sem cortes. Roteiro e guia usam o mesmo componente, evitando divergência entre a apresentação principal, seção prática, conteúdo e planos. Composição ajustada para celulares. Conferência visual em desktop e quadros de 360/430px; largura de rolagem igual à largura útil dos dois quadros. Build de produção concluída. Nenhuma promessa comercial alterada.


## Ajuste mobile e carrossel — 27/10/2026
Primeira aplicação: apresentação mobile reduzida de 325px para 220px, sem plataforma e legenda redundante, com capa e roteiro íntegros em painel compacto. Complementos em carrossel manual até 600px; quatro cards preservados, indicadores de posição, setas, toque nativo e teclado. Grade mantida no desktop. Miniaturas sem cortes. Contador testado em 2/4; ausência de overflow geral em quadros 360 e 430px. Navegação por indicadores respeita movimento reduzido.


## Checkout Formação configurado — 28/10/2026
Associado o CTA da Formação ÍCON, R$197,90, ao endereço Cakto enviado pelo usuário. Mantida a URL centralizada em src/comercial.js; o botão deixa de exibir “Vendas em breve”.
