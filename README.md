# ConnectFlight

Página inicial em React baseada no protótipo do Figma (Atividade Avaliativa – Programação para WEB II, UNITINS).

## Tecnologias
- React 18 + Vite
- React Router (navegação entre as telas do rodapé)
- CSS puro com variáveis, Flexbox e Grid (responsivo)

## Como rodar
```bash
npm install
npm run dev      # ambiente de desenvolvimento
npm run build    # build de produção
```

## Estrutura
```
src/
├── components/   # Layout, Footer, FooterNav, Wave, Hero, Button, cards, formulário...
├── pages/        # Home, Destinos, Ofertas, Contato, NotFound
├── data/         # dados de exemplo (destinos e ofertas)
└── styles/       # global.css
```

## Telas
- **Home** (`/`): reprodução do protótipo.
- **Destinos** (`/destinos`): lista com filtro nacional/internacional e estado vazio.
- **Ofertas** (`/ofertas`): pacotes com desconto; o botão leva ao Contato com a mensagem preenchida.
- **Contato** (`/contato`): formulário com validação, estado de envio e de sucesso.
