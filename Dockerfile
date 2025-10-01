# Multi-stage build для оптимизации размера образа
FROM node:18-alpine AS base

# Установка зависимостей включая dev зависимости для сборки
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Build stage
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci

# Копируем исходный код
COPY . .

# Создаем production build
RUN npm run build

# Production stage
FROM node:18-alpine AS production

WORKDIR /app

# Создаем пользователя с ограниченными правами
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Копируем только необходимые файлы
COPY --from=base /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./

# Копируем статические файлы
COPY --from=builder /app/attached_assets ./attached_assets

# Устанавливаем права собственности
RUN chown -R nextjs:nodejs /app
USER nextjs

# Открываем порт
EXPOSE 5000

# Устанавливаем переменные окружения
ENV NODE_ENV=production
ENV PORT=5000

# Запускаем приложение
CMD ["npm", "start"]
