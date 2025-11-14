# 1. Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Install deps
COPY package.json package-lock.json* ./
RUN npm install

# Copy source
COPY . .

# Build Next.js app
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# 2. Runtime stage
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Copy minimal artifacts from builder
COPY --from=builder /app/package.json /app/package-lock.json* ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.* ./

# Install prod deps only
RUN npm install --omit=dev

EXPOSE 3000

CMD ["npm", "start"]
