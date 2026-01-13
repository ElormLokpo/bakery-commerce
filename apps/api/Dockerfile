FROM oven/bun:1 AS base
WORKDIR /app

FROM base AS install

COPY package.json bun.lockb* ./
COPY apps/api/package.json ./apps/api/
COPY packages ./packages
RUN bun install --frozen-lockfile


FROM base AS build
COPY --from=install /app/node_modules ./node_modules
COPY --from=install /app/packages ./packages
COPY apps/api ./apps/api
WORKDIR /app/apps/api


FROM base AS release
COPY --from=build /app/apps/api ./
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/packages /app/packages

EXPOSE 8080
CMD ["bun", "run", "src/index.ts"]