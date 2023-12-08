FROM node:bookworm-slim AS base

RUN mkdir /.pnpm && chmod 700 /.pnpm

RUN mkdir -p /app/test && chown -R node:node /app

USER root

RUN npm install -g pnpm@latest

USER node

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

FROM base AS prod-deps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

WORKDIR /app/test

CMD [ "pnpm", "run", "test" ]
