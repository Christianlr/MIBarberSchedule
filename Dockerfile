FROM bitnami/node:20.10.0

LABEL maintainer="chrlr@correo.ugr.es" \
      version="5.0.3"

RUN useradd -ms /bin/bash node

RUN chown -R node:node /app

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

USER node

WORKDIR /app/

COPY package.json pnpm-lock.yaml  ./

RUN  pnpm install --frozen-lockfile

ENV PATH $PATH:/app/node_modules/.bin

WORKDIR /app/test/

ENTRYPOINT [ "pnpm", "run", "test" ]
