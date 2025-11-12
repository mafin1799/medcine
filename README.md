# Проект medcine (React + Radix Themes + Vite React SSG)

## Установка зависимостей

Выполните команду для установки всех необходимых зависимостей:

```bash
npm install
```

или

```bash
yarn install
```


***

## Запуск проекта в режиме разработки

Для запуска проекта в режиме разработки используйте:

```bash
npm run dev
```

или

```bash
yarn dev
```

Обычно сервер будет доступен по адресу http://localhost:3000 или http://localhost:5173 (зависит от конфигурации).

***

## Сборка проекта для продакшн

Для сборки проекта сгенерируйте оптимизированный статический сайт:

```bash
npm run build
```

или

```bash
yarn build
```

Готовые файлы будут собраны в папку `dist/`.

***

## Просмотр собранного проекта локально

Чтобы протестировать собранный статический сайт, выполните команду:

```bash
npm run preview
```

или

```bash
yarn preview
```


***

## Рекомендации по деплою

- Поскольку проект собран как статический сайт (SSG), можно разместить его на любых статических хостингах: Netlify, Vercel, GitHub Pages, Firebase Hosting и т.д.
- При деплое убедитесь, что сервер корректно отдает статические файлы, а для SPA-роутинга настроена поддержка fallback (если используется динамический роутинг).
- Обычно достаточно просто указать папку `dist/` как корень для хостинга.

***

## Где писать код отправки формы

В вашем проекте используется React Hook Form для обработки формы. Логика отправки данных на сервер должна находиться в функции `onSubmit` вашего компонента `App`:

```tsx
const onSubmit = async (formData) => {
  // Здесь пишем запрос на API для отправки данных
  // например, через fetch или axios:
  try {
    const response = await fetch('/api/send-form', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (!response.ok) throw new Error('Ошибка отправки');

    setIsOpenSuccess(true); // Показываем диалог успешной отправки
  } catch (error) {
    // Здесь можно обработать ошибку — показать уведомление и т.п.
    console.error(error);
  }
};
```

- `formData` — объект со значениями всех полей формы.
- Эта функция вызывается автоматически при успешной валидации формы.

***

## Используемые ключевые пакеты

```json
{
  "dependencies": {
    "@radix-ui/themes": "^3.2.1",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "react-hook-form": "^7.66.0",
    "react-router-dom": "^6.30.1",
    "vite-react-ssg": "^0.8.9"
  },
  "devDependencies": {
    "@eslint/js": "^9.39.1",
    "@types/node": "^24.10.0",
    "@types/react": "^19.2.2",
    "@types/react-dom": "^19.2.2",
    "@vitejs/plugin-react": "^5.1.0",
    "eslint": "^9.39.1",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.24",
    "globals": "^16.5.0",
    "typescript": "~5.9.3",
    "typescript-eslint": "^8.46.3",
    "vite": "^7.2.2"
  }
}
```
