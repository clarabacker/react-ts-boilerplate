# Boilerplate - React TS + styled-components

Este é um boilerplate com um setup inicial e as principais dependências para projetos utilizando **React**, **TypeScript** e **styled-components**.

## Tecnologias Utilizadas

![Node](https://img.shields.io/badge/Node-20.0.0-339933?logo=node.js)
![React](https://img.shields.io/badge/React-19.1.1-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?logo=vite)
![Styled Components](https://img.shields.io/badge/styled--components-6.1.19-DB7093?logo=styled-components)
![Vitest](https://img.shields.io/badge/Vitest-3.2.4-6E9F18?logo=vitest)
![React Testing Library](https://img.shields.io/badge/RTL-16.3.0-E33332?logo=testing-library)
![ESLint](https://img.shields.io/badge/ESLint-9.37.0-4B32C3?logo=eslint)
![Prettier](https://img.shields.io/badge/Prettier-3.6.2-F7B93E?logo=prettier)
![Husky](https://img.shields.io/badge/Husky-8.0.0-000000?logo=github)
![lint-staged](https://img.shields.io/badge/lint--staged-16.2.4-4FC08D?logo=lint-staged)

## Estrutura do Projeto

- **public**: arquivos estáticos públicos.

- **src**: contém todo o código-fonte da aplicação.
  - **app**: componente raiz da aplicação e seus estilos.
  - **assets**: arquivos estáticos usados no código, como imagens, fontes e arquivos de mídia.
  - **constants**: valores e configurações globais (ex.: temas, URLs).
  - **components**: componentes React **presentacionais** e **elementos de UI reutilizáveis**. Inclui:
    - **componentes atômicos** (ex.: `Button`, `Input`, `Card`);
    - **estilos globais**
    - **utilitários de UI** (ex.: `breakpoints.ts`);
    - Esses componentes não contêm lógica de negócio e focam apenas na renderização da interface.
  - **containers**: componentes React responsáveis ​​por gerenciar a lógica da aplicação, como manipulação de estado, orquestração de dados e interação com serviços externos. Eles passam os dados e funções necessários para os componentes presentacionais.
  - **contexts**: provedores e contextos React para gerenciamento de estado global.
  - **hooks**: custom hooks reutilizáveis.
  - **utils**: funções utilitárias e helpers usados em várias partes do projeto.
  - **pages**: componentes que representam as páginas ou rotas principais da aplicação.
  - **services**: arquivos responsáveis pela comunicação com APIs, serviços externos, manipulação de dados remotos e lógica relacionada a integração com backend.
  - **main.tsx**: ponto de entrada da aplicação, onde o ReactDOM renderiza o `<App />`.

## Scripts disponíveis

| Comando              | Descrição                                                   |
| -------------------- | ----------------------------------------------------------- |
| `npm run dev`        | Inicia o servidor de desenvolvimento Vite                   |
| `npm run build`      | Compila TypeScript e gera build para produção               |
| `npm run start`      | Roda preview da build gerada                                |
| `npm run lint`       | Executa ESLint para analisar o código                       |
| `npm run lint:fix`   | Corrige automaticamente problemas identificados pelo ESLint |
| `npm run format`     | Formata arquivos com Prettier                               |
| `npm run prepare`    | Instala hooks do Husky                                      |
| `npm run test`       | Executa todos os testes com Vitest                          |
| `npm run test:watch` | Executa os testes em modo observador (watch)                |
| `npm run coverage`   | Gera relatório de cobertura de testes                       |

## Lint e Formatação

- Husky e lint-staged garantem que antes dos commits o código seja automaticamente lintado e formatado.
- Use `npm run lint` para verificar erros manualmente.
- Use `npm run lint:fix` para corrigir erros automaticamente.
- Utilize `npm run format` para aplicar a formatação Prettier em todos os arquivos suportados.

## Testes Automatizados

Este projeto utiliza:

- ✅ **[Vitest](https://vitest.dev/)** como test runner ultrarrápido.
- 🧪 **[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)** para testes de componentes React focados na experiência do usuário.

### Estrutura recomendada para testes

- Criar arquivos `*.test.ts` ou `*.test.tsx` na mesma pasta do componente.

### Executar os testes

```bash
npm run test
npm run test:watch
npm run coverage
```

## Utilização

1. Clone ou forke este repositório.
2. (Opcional) Instale as extensões recomendadas no VSCode:
   - **ESLint** (para validação automática do código)
   - **Prettier - Code formatter** (para formatação automática do código)
3. Execute `npm install` para instalar as dependências do projeto.
4. Utilize `npm run dev` para rodar o servidor de desenvolvimento local.
5. Use `npm run build` para gerar o build de produção.
6. Execute `npm run start` para visualizar a build em modo preview.

## Licença

Este projeto está licenciado sob a licença MIT.

## Contribuidores

- Ana Clara Backer (Autor)
