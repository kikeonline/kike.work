This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Features
- 🔥 Next JS
- 🛂 Strict TypeScript
- 🚨 ESLint & Type-Check
- 🐙 Octokit JS

## Requirements

### Create .env file

`cp .env.example .env.local`

| KEY      | Description |
| ----------- | ----------- |
| GITHUB_KEY      | Your github personal access token to fetch your repos. |

## Run development server

```bash
npm run dev
```

## Build to deploy
This is a static project, no node server is needed. Files will be exported to `_static` folder.

```bash
npm run export
```