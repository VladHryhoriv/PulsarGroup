# Arion Web

### Initilization

```bash
npm install
```

or

```bash
yarn install
```

### Start

```bash
npm run dev
```

or

```bash
yarn dev
```

# State manager

The state manager is ☄️ [Effector](https://effector.now.sh/docs/introduction/core-concepts)

### Build

```bash
npm install
npm run build
```

# Conventional Commits

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)

- `refactor`: A code change that neither fixes a bug or adds a feature
- `perf`: A code change that improves perfomance
- `test`: Adding missing tests
- `chore`: Changes to the build process or auxiliary tools and libraries such as documentation generation

## Example

Good:

```git
feat(user): integration ui
```

```git
test: add new unit-tests
```

```git
fix(admin): fix roots
```

Bad:

```git
new unit-tests
```

```git
fix bugs
```
