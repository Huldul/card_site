# 🚀 Развертывание на Vercel

## Быстрый старт:

### 1. Установите Vercel CLI:
```bash
npm i -g vercel
```

### 2. Войдите в аккаунт:
```bash
vercel login
```

### 3. Разверните проект:
```bash
vercel --prod
```

## Автоматическое развертывание:

1. **Подключите GitHub репозиторий** к Vercel
2. **Vercel автоматически** развернет при каждом push
3. **Получите URL** типа: `https://your-project.vercel.app`

## Настройки проекта:

- **Framework Preset**: Other
- **Build Command**: `npm run build`
- **Output Directory**: `dist/public`
- **Install Command**: `npm install`

## Переменные окружения:

Добавьте в Vercel Dashboard:
- `NODE_ENV=production`
- `PORT=3000`

## Результат:
✅ Полнофункциональный сайт с backend
✅ Автоматическое развертывание
✅ HTTPS и CDN
✅ Бесплатно для личных проектов
