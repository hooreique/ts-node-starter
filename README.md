# ts-node-starter

TypeScript on Node.js Project Starter (Initializer)

## Prerequisites

- Node.js
- PNPM

## 용도

TypeScript 프로젝트 Initializer 가 필요하여 만든 템플릿 성격의 리포지토리이다.

`src/app.ts` 를 Node.js 환경에서 실행하기 위한 기본 구성이다.

## TMI

타입스크립트 코드를 실행하려면 어떻게 해야 하나. 타입스크립트는 그 자체로 실행할 수 없고 자바스크립트로 컴파일 후 실행할 수 있다. 즉 자바스크립트로 변환하는 과정이 반드시 필요하다.

또한 협업 시 린팅, 포매팅은 선택이 아닌 필수이다. 코드 스타일에 일관성이 생겨 코드 퀄리티 유지에 도움을 주는 것은 물론, 코드리뷰 시 사소한 스타일 차이로 인한 불필요한 시간 낭비 (Nit-picking) 를 방지해주기 때문이다.

이 소스코드에서는 린팅에 ESLint, 포매팅에 Editorconfig, Prettier 가 사용되었다.

## 구성

`package.json` 의 `"scripts"` 를 살펴 보자.

```json
"scripts": {
  "build": "pnpm exec eslint . && pnpm exec tsc",
  "dev": "pnpm exec eslint . --fix && pnpm exec tsc && node build/app.js",
  "lint": "pnpm exec eslint .",
  "fix": "pnpm exec eslint . --fix",
  "format": "pnpm exec prettier --write ."
}
```

```sh
pnpm run dev
```

와 같이 실행하면 된다.

### TypeScript 구성

`pnpm exec tsc` 를 통해 타입스크립트를 자바스크립트로 컴파일한다.

- `tsconfig.json`

### ESLint 구성 (린터)

`pnpm exec eslint .` 을 통해 린트한다. (린팅에 포매팅이 포함되며 이때 Prettier 설정을 따른다.)

- `.eslintrc.yml`

### Prettier 구성 (포매터)

`pnpm exec prettier --write .` 을 통해 포매팅한다.

- `.prettierrc.yml`
- `.prettierignore`
- `.editorconfig` (Prettier 는 기본적으로 Editorconfig 설정을 따른다.)
