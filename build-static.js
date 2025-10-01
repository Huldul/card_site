#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Копируем vercel-static.json в vercel.json для статического развертывания
const staticConfig = JSON.parse(fs.readFileSync('vercel-static.json', 'utf8'));
fs.writeFileSync('vercel.json', JSON.stringify(staticConfig, null, 2));

console.log('✅ Vercel configuration updated for static deployment');
console.log('📁 Static files will be served from dist/public/');
console.log('🚀 Ready for Vercel deployment!');
