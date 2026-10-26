# ÍCON — IA na Prática Escolar
Landing page React/Vite com ÍCON Essencial (R$67,90) e Formação ÍCON (R$197,90).

## Executar
```sh
npm ci
npm run dev
npm run build
```
A saída de produção fica em `dist/`. Na hospedagem, usar `pagina-de-vendas` como diretório raiz, comando `npm run build` e saída `dist`.

## Ativar compras
Copiar `.env.example` para `.env.local` e preencher os dois checkouts e links institucionais. URLs são dados públicos de frontend; nunca inserir senhas ou chaves privadas. Sem checkout, o card mostra vendas em breve. Testar os destinos reais e as condições comerciais antes de publicar anúncios. O código propaga somente UTMs e identificadores de atribuição permitidos.

Copy em `src/content.js`. Condições comerciais e datas em `src/comercial.js`. A configuração não inclui analytics, pixels ou UTMify porque nenhum ID/script foi fornecido nesta execução.

## Conclusão comercial pendente
Informar checkouts, contato de suporte, termos e privacidade, identificação do fornecedor, prazo de acesso, plataforma dos encontros e cronograma dos materiais avançados. Os materiais avançados ainda serão produzidos. Não anunciar como entrega imediata.

Os quatro arquivos de modelos do Essencial incluem o gabarito separado. A Formação soma60prompts e24modelos no total. Certificado só na Formação. Os12h são distribuídos em2hgravadas+6hao-vivo+2hexercícios+2hprojeto.

## Reutilização
As regras próprias em `../regras-landing-pages/PADRAO.md` e `../AGENTS.md` preservam o padrão para outros produtos. Reutilizar estrutura, não alegações, valores, identidade ou provas de um produto em outro. Documentação editorial e QA numerada neste diretório.
