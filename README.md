# kike.work profile website

## Features
- 🔥 Next JS
- 🛂 Strict TypeScript
- 🚨 ESLint & Type-Check
- 🐙 Octokit JS to fetch repos
- 📄 Static export (No node server needed on delpoy)

## requirements
1. Create .env file. Add your username in the `GITHUB_USERNAME` variable

```bash
cp .env.example .env.local
````

2. Add your Devs and Companies in `/libs/api.ts`

## Run development server

```bash
npm run dev
```

## Build to deploy
This is a static project, no node server is needed. Files will be exported to `_static` folder.

```bash
npm run export
```


## Todo
- 🌐 Add `next-i18next`