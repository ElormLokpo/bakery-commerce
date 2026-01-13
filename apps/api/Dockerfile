FROM oven/bun:1 AS base
WORKDIR /app


FROM base AS install
COPY package.json bun.lockb* ./
RUN bun install --frozen-lockfile


FROM base AS build
COPY --from=install /app/node_modules ./node_modules
COPY . .


FROM base AS release
COPY --from=build /app ./

EXPOSE 10000

CMD ["bun", "run", "src/index.ts"]