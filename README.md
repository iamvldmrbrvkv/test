# Тест

## Задача:
- Нужно разработать логику теста, с выводом результатов его прохождения.

## Макет:
- **[Figma](https://www.figma.com/design/RDAtzvSrxInNfo8Ch6lbwz/div.test_task.frontend?node-id=0%3A1&t=Qc5aVUDkZmubI4YX-1)**

## Логика:
- Вопросы в тесте должны выводиться в случайном порядке;
- Ответы для каждого из вопросов должны выводиться в случайном порядке;
- Под тестом должен быть реализован прогрессбар прохождения теста, также он должен зависеть от количества вопросов в тесте;
- При выводе результата теста, вопросы, на которые пользователь ответил правильно, должны быть выделены зеленым цветом, а на которые неправильно — красным цветом;
- Контент для теста находится во фрейме “Вопросы и ответы”. Правильный ответ отмечен в каждом из вопросов знаком плюса "+" в конце строки;
- При ответе на вопрос, должна происходить задержка в 1 сек. перед отображением следующего вопроса или результатов теста.

## Верстка:
- Использование методологии BEM;
- Валидность HTML тегов;
- Pixel Perfect.

## Использованные технологии
- **[Redux Toolkit](https://redux-toolkit.js.org/)**: для управления состоянием приложения и RTK Query для получения и хранения данных.
- **[MSW (Mock Service Worker)](https://mswjs.io/)**: для обработки и тестирования фейковых запросов в ходе разработки.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
