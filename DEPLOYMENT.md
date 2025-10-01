# 🚀 Развертывание Card Site

Этот проект поддерживает несколько способов развертывания:

## 1. 🐳 Docker (Локально)

```bash
# Клонировать репозиторий
git clone https://github.com/Huldul/card_site.git
cd card_site

# Запустить через Docker Compose
docker-compose up --build

# Приложение будет доступно на http://localhost:3000
```

## 2. ☁️ Vercel (Рекомендуется)

### Автоматическое развертывание:
1. Подключите репозиторий к Vercel
2. Добавьте секреты в GitHub:
   - `VERCEL_TOKEN` - токен Vercel
   - `ORG_ID` - ID организации Vercel
   - `PROJECT_ID` - ID проекта Vercel

### Ручное развертывание:
```bash
# Установить Vercel CLI
npm i -g vercel

# Развернуть
vercel --prod
```

## 3. 🚂 Railway (Docker)

1. Подключите GitHub репозиторий к Railway
2. Добавьте секрет `RAILWAY_TOKEN` в GitHub
3. Railway автоматически развернет Docker контейнер

## 4. 📄 GitHub Pages (Статическая версия)

1. Включите GitHub Pages в настройках репозитория
2. Выберите источник: "GitHub Actions"
3. Workflow автоматически развернет статическую версию

## 🔧 Переменные окружения

Для production развертывания добавьте:

```env
NODE_ENV=production
PORT=5000
```

## 📝 Примечания

- **Vercel** - лучший выбор для fullstack приложений
- **Railway** - отлично для Docker контейнеров
- **GitHub Pages** - только для статической версии (без backend)

## 🛠️ Локальная разработка

```bash
# Установить зависимости
npm install

# Запустить в режиме разработки
npm run dev

# Собрать для production
npm run build
npm start
```
