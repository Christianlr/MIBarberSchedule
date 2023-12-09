FROM node:bookworm-slim AS base

LABEL maintainer="chrlr@correo.ugr.es" \
      version="5.0.3"

RUN mkdir /.pnpm && chmod 777 /.pnpm

RUN mkdir -p /app/test && chown -R node:node /app

USER root

RUN npm install -g pnpm@latest

USER node

WORKDIR /app/

COPY package.json pnpm-lock.yaml  ./

RUN  pnpm install ci

ENV PATH $PATH:/app/node_modules/.bin

WORKDIR /app/test/

ENTRYPOINT [ "pnpm", "run", "test" ]
