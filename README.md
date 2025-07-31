# TypeScript Express Template

Um template completo para projetos Node.js com TypeScript e Express, configurado com as melhores práticas e ferramentas de desenvolvimento.

## 🚀 Tecnologias Utilizadas

### Dependências Principais

- **Express 5.1.0** - Framework web rápido e minimalista
- **TypeScript** - Superset do JavaScript com tipagem estática
- **dotenv** - Gerenciamento de variáveis de ambiente
- **jet-logger** - Logger eficiente para aplicações Node.js
- **morgan** - Middleware de logging HTTP

### Ferramentas de Desenvolvimento

- **ESBuild** - Bundler e transpilador ultra-rápido
- **Jest** - Framework de testes
- **ESLint** - Linting e formatação de código
- **tsx** - Execução TypeScript com hot reload
- **ts-node** - Execução direta de arquivos TypeScript

## 📁 Estrutura do Projeto

```
├── dist/                 # Arquivos compilados
├── src/                  # Código fonte
│   ├── config/          # Configurações da aplicação
│   │   └── jet-logger.config.ts
│   ├── constants/       # Constantes da aplicação
│   │   ├── environment.ts
│   │   └── index.ts
│   └── test/           # Arquivos de teste
├── EnvConfig/          # Configurações de ambiente
│   ├── .env.dev        # Variáveis de desenvolvimento
│   └── .env.production # Variáveis de produção
├── .env                # Arquivo de ambiente principal
├── .env.example        # Exemplo de configuração
├── .gitignore          # Arquivos ignorados pelo Git
└── package.json        # Dependências e scripts
```

## ⚙️ Configuração

### 1. Clone o template

```bash
git clone git@github.com:Natan-Barbosa/Template-TypeScript.git
cd <nome-do-projeto>
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

```bash
cp .env.example .env
```

Edite o arquivo `.env` e escolha o ambiente:

```env
# Application Has Two Files With Environment
# Choose only one

# 1 - dev
# 2 - production

NODE_ENV = dev
```

## 🛠️ Scripts Disponíveis

### Desenvolvimento

```bash
npm run start:dev    # Inicia o servidor em modo desenvolvimento com hot reload
```

### Produção

```bash
npm run build        # Compila o projeto para produção
npm start           # Inicia o servidor em modo produção
```

### Qualidade de Código

```bash
npm run lint        # Executa o ESLint para verificar o código
npm run types       # Verifica os tipos TypeScript sem compilar
npm test           # Executa os testes com Jest
```

## 🏗️ Estrutura de Configuração

### Ambientes

O template suporta múltiplos ambientes através de arquivos separados:

- `EnvConfig/.env.dev` - Configurações de desenvolvimento
- `EnvConfig/.env.production` - Configurações de produção

### Logging

Configurado com **jet-logger** para logging eficiente e **morgan** para logs HTTP.

### Build

Utiliza **ESBuild** para compilação rápida e otimizada, gerando um único arquivo `dist/out.cjs`.

## 🧪 Testes

O projeto está configurado com Jest e ts-jest para execução de testes TypeScript:

```bash
npm test
```

## 📝 ESLint

Configuração completa do ESLint com:

- TypeScript ESLint parser e plugin
- Regras para JavaScript/TypeScript
- Configuração para projetos Node.js

Execute o linting com:

```bash
npm run lint
```

### Modificando a configuração de build

Edite o arquivo `esbuild.config.js` para personalizar o processo de build.

### Configurando novos ambientes

1. Crie um novo arquivo em `EnvConfig/`
2. Atualize o arquivo `.env` com o novo ambiente
3. Ajuste a lógica de carregamento em `src/constants/environment.ts`

**Template criado para agilizar o desenvolvimento de APIs TypeScript com Express** 🚀
