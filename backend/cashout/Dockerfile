FROM node:18-alpine AS builder

WORKDIR /build

COPY ["package.json", "pnpm-lock.yaml", "tsconfig.json", "tsconfig.build.json", "nest-cli.json", "./"]

RUN npm install -g pnpm
RUN pnpm install --ignore-scripts

COPY src src

RUN pnpm build

FROM node:18-alpine

WORKDIR /usr/src/app

COPY --from=builder /build/node_modules ./node_modules
COPY --from=builder /build/package.json ./
COPY --from=builder /build/dist ./dist

RUN npm install -g pnpm

CMD [ "pnpm", "start:prod" ]