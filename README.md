# Next.js 9 + Apollo GraphQL + TypeScript starter

## Features

- Small, builtin GraphQL server
- Generates TypeScript types from GraphQL schema
- Easier development overview in terminal: each process gets its split window


## Requirements

- [Node.js 10.x](https://nodejs.org/en/download/)
- [Yarn](https://yarnpkg.com)


## Used packages

- [Next.js 9](https://github.com/zeit/next.js/tree/v9.0.2)
- [Apollo](https://www.apollographql.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
- [GraphQL Code Generator](https://graphql-code-generator.com/docs/getting-started/)
- [stmux](https://github.com/rse/stmux)


## Installation

- Clone this repository.
- `yarn install`


## Development

### Running the toolchain

```
yarn dev
```

🔥 To quit press `ctrl-a k`


### Linting using ESLint , and fixing linting errors

To see linting errors on command line do the following: 

```
yarn lint
```

Some ESLint errors are fixable programmatically, to do so please use:

```
yarn lint-fix
```






