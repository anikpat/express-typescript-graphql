# Express TypeScript GraphQL Project

A modern API server built with Express.js, TypeScript, and GraphQL, providing a robust foundation for building scalable web applications.

## Features

- 🚀 Express.js server with TypeScript support
- 📊 GraphQL API implementation
- 🔒 Type-safe development with TypeScript
- 📝 Schema-first GraphQL development
- 🔄 Hot-reloading for development

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd express-typescript-graphql
```

2. Install dependencies:
```bash
npm install
```

## Development

Start the development server:

```bash
npm run dev
```

The server will start on `http://localhost:4000` with GraphQL Playground available at `http://localhost:4000/graphql`

## Building for Production

Build the project:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Project Structure

```
express-typescript-graphql/
├── src/
│   ├── schema.ts        # GraphQL schema definitions
│   ├── resolvers/       # GraphQL resolvers
│   ├── types/          # TypeScript type definitions
│   └── index.ts        # Application entry point
├── package.json
└── tsconfig.json
```

## Scripts

- `npm run dev` - Start development server with hot-reload
- `npm run build` - Build the project for production
- `npm start` - Start the production server
- `npm run lint` - Run linting
- `npm test` - Run tests