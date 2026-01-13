FROM oven/bun:1 AS base
WORKDIR /app

# Install dependencies
FROM base AS install
COPY package.json bun.lockb ./
COPY apps/api/package.json ./apps/api/
# If you have shared packages
COPY packages ./packages
RUN bun install --frozen-lockfile

# Copy application code
FROM base AS build
COPY --from=install /app/node_modules ./node_modules
COPY --from=install /app/packages ./packages
COPY apps/api ./apps/api
WORKDIR /app/apps/api

# Production image
FROM base AS release
COPY --from=build /app/apps/api ./
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/packages /app/packages

# Expose port (Fly.io uses 8080 by default)
EXPOSE 8080

# Start the app
CMD ["bun", "run", "src/index.ts"]