# BM Bright Minds Accelerator — Estrutura do Site

## 1. Visão Geral

**Tipo:** Site institucional single-page (landing page) com seções âncora
**Stack:** Next.js 16 + TypeScript + Tailwind CSS
**Fontes:** Montserrat (headings) + Inter (body) via Google Fonts
**Tema:** Dark — fundo predominante #0B0B0B / #151A3A, textos em branco, acentos em dourado e roxo

---

## 2. Estrutura de Páginas e Seções

O site será uma **landing page única** com navegação por âncoras (scroll suave). Cada seção ocupa a viewport inteira ou quase inteira.

### 2.1. Header / Navegação

- Logo BM (à esquerda)
- Menu de navegação: Início · Sobre · Serviços · Pilares · Resultados · Contato
- CTA fixo no header: botão "Fale Conosco" (dourado)
- Menu hamburger em mobile
- Header com efeito glassmorphism/transparência no scroll

### 2.2. Hero Section

- Headline principal (impactante, curta)
  - Ex: "Transformamos números em direção estratégica"
- Subtítulo com a proposta de valor
  - Ex: "Estruturação financeira para empresas que querem crescer com solidez"
- CTA primário: "Agende uma Consultoria" (botão dourado)
- CTA secundário: "Conheça nossos serviços" (botão outline)
- Elemento visual: gráfico animado de crescimento / partículas ou formas geométricas abstratas

### 2.3. Sobre a BM Bright Minds

- Título da seção: "Quem Somos"
- Texto sobre a empresa, missão e visão
- Destaque: o significado do logotipo (B + M + gráfico de crescimento = inteligência estratégica)
- Possível imagem/foto da equipe ou do fundador
- Números de impacto (se houver): empresas atendidas, anos de experiência, etc.

### 2.4. Serviços

- Título: "O que fazemos"
- Cards de serviços (grid 2x2 ou 3 colunas):
  1. **Estruturação Financeira** — Organização completa da estrutura financeira
  2. **Planejamento Tributário** — Eficiência tributária e compliance
  3. **Governança Corporativa** — Processos, controles e transparência
  4. **Consultoria Estratégica** — Direção baseada em dados para decisões de crescimento
- Cada card: ícone + título + breve descrição
- Hover com efeito de destaque (borda dourada ou glow roxo)

### 2.5. Pilares

- Título: "Nossos Pilares"
- 3 blocos visuais destacados:
  1. **Estrutura Financeira** — ícone + texto explicativo
  2. **Eficiência Tributária** — ícone + texto explicativo
  3. **Governança** — ícone + texto explicativo
- Layout visual: timeline, colunas com divisores ou cards com ícones grandes
- Fundo diferenciado (azul marinho #151A3A) para contraste

### 2.6. Resultados / Diferenciais

- Título: "Por que a BM Bright Minds?"
- Lista de diferenciais ou casos de sucesso
- Possíveis depoimentos de clientes (carrossel)
- Métricas/números animados (contador)
- Badges de confiança ou parceiros

### 2.7. CTA Section (Call to Action)

- Faixa de destaque (fundo dourado/gradiente)
- Frase de impacto: "Pronto para estruturar o crescimento da sua empresa?"
- Botão: "Agende agora" ou "Fale com um especialista"

### 2.8. Contato / Footer

- Formulário de contato: Nome, Email, Telefone, Mensagem
- Informações de contato: email, telefone, endereço (se aplicável)
- Links para redes sociais (LinkedIn, Instagram)
- Copyright: "© 2026 BM Bright Minds Accelerator. Todos os direitos reservados."

---

## 3. Design System — Tokens

### 3.1. Cores

| Token              | Hex       | Uso                                      |
|---------------------|-----------|------------------------------------------|
| `--color-dark`      | `#0B0B0B` | Background principal                     |
| `--color-navy`      | `#151A3A` | Background alternativo / seções          |
| `--color-purple`    | `#665685` | Acentos secundários, bordas, hover       |
| `--color-white`     | `#FFFFFF` | Texto principal, ícones                  |
| `--color-gold`      | `#C8A84E` | CTAs, destaques, elementos premium       |
| `--color-gold-light`| `#E8D48B` | Hover de CTAs, brilhos                   |

> Nota: O dourado exato será definido com base nas referências visuais.

### 3.2. Tipografia

| Elemento       | Fonte      | Peso         | Tamanho (desktop) |
|----------------|------------|--------------|---------------------|
| H1             | Montserrat | Bold (700)   | 56–64px             |
| H2             | Montserrat | SemiBold (600)| 40–48px            |
| H3             | Montserrat | SemiBold (600)| 28–32px            |
| Body           | Inter      | Regular (400) | 16–18px            |
| Body Small     | Inter      | Regular (400) | 14px               |
| Button         | Montserrat | SemiBold (600)| 16px               |
| Caption        | Inter      | Medium (500)  | 12–14px            |

### 3.3. Espaçamento

- Seções: padding vertical de 80–120px (desktop), 48–64px (mobile)
- Container max-width: 1200px, centrado
- Gap entre cards: 24–32px

### 3.4. Efeitos

- Botões: hover com brilho dourado / scale sutil
- Cards: hover com borda roxo/dourado + leve elevação
- Transições: 300ms ease
- Scroll reveal: fade-in + slide-up ao entrar na viewport

---

## 4. Estrutura de Arquivos (Next.js)

```
src/
├── app/
│   ├── layout.tsx          # Layout raiz (fontes, metadata, estrutura)
│   ├── page.tsx            # Página principal (compõe todas as seções)
│   ├── globals.css         # Variáveis CSS globais + Tailwind
│   └── favicon.ico         # Favicon BM
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Navbar fixa com logo + menu + CTA
│   │   └── Footer.tsx      # Footer com contato + redes + copyright
│   │
│   ├── sections/
│   │   ├── Hero.tsx        # Seção hero com headline + CTAs
│   │   ├── About.tsx       # Quem somos
│   │   ├── Services.tsx    # Cards de serviços
│   │   ├── Pillars.tsx     # Os 3 pilares
│   │   ├── Results.tsx     # Diferenciais / resultados
│   │   └── CTA.tsx         # Faixa de call-to-action
│   │
│   └── ui/
│       ├── Button.tsx      # Botão reutilizável (primary, secondary, outline)
│       ├── Card.tsx        # Card reutilizável para serviços/pilares
│       ├── SectionTitle.tsx # Título de seção padronizado
│       └── Container.tsx   # Wrapper de largura máxima
│
├── lib/
│   └── constants.ts        # Textos, links, dados dos serviços/pilares
│
└── assets/
    └── images/             # Logo, ícones, imagens de fundo
```

---

## 5. Dependências a Instalar

| Pacote                  | Motivo                                      |
|-------------------------|---------------------------------------------|
| `tailwindcss` + config  | Estilização utility-first                   |
| `@tailwindcss/postcss`  | Integração com PostCSS                      |
| `framer-motion`         | Animações de scroll reveal e transições     |
| `lucide-react`          | Ícones modernos e leves                     |
| `@next/font` (built-in) | Montserrat + Inter via next/font/google    |

---

## 6. Responsividade

| Breakpoint | Largura   | Adaptações                              |
|------------|-----------|------------------------------------------|
| Mobile     | < 768px   | Menu hamburger, cards empilhados, texto menor |
| Tablet     | 768–1024px| Grid 2 colunas, header compacto          |
| Desktop    | > 1024px  | Layout completo, 3 colunas, efeitos hover|

---

## 7. SEO & Performance

- Metadata otimizada no `layout.tsx` (title, description, og:image)
- Imagens otimizadas com `next/image`
- Fontes via `next/font/google` (sem layout shift)
- Lazy loading nas seções abaixo do fold
- Lighthouse target: 90+ em todas as métricas

---

## 8. Próximos Passos

1. ✅ Estrutura definida (este documento)
2. ⏳ **Receber referências visuais** do usuário
3. 🔜 Instalar dependências (Tailwind, Framer Motion, Lucide)
4. 🔜 Configurar design tokens (cores, fontes, espaçamento)
5. 🔜 Implementar componentes seção por seção
6. 🔜 Responsividade e animações
7. 🔜 Revisão final e deploy
