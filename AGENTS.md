# AGENTS.md — See Movies

## Архитектура

Feature-Based Architecture (FBA) со строгой иерархией слоёв. Импорты идут **только вниз**:

```
app → ui-pages → widgets → features → entities → shared
```

| Слой | Назначение |
|------|-----------|
| `app/` | Next.js App Router, лэйауты, сборка провайдеров. Без бизнес-логики. |
| `ui-pages/` | UI-композиция страниц из виджетов и фич. Без бизнес-логики. |
| `widgets/` | Крупные самостоятельные UI-блоки (Header, MoviesSearch). |
| `features/` | Изолированные бизнес-фичи со своим API, UI и состоянием. |
| `entities/` | Доменные типы и утилиты, общие для нескольких фич (`movie`, `user`). |
| `shared/` | Переиспользуемые примитивы без бизнес-смысла (api-клиент, ui, lib, routes). |

## Команды разработки

```bash
npm run dev          # Запуск dev-сервера
npm run build        # Продакшн-сборка
npm run lint         # Проверка ESLint
npm run prettier:fix # Автоформатирование всех файлов
```

## Соглашения

**Именование**
- Папки: `kebab-case` (например, `saved-movies/`, `filter-short-movies/`)
- React-компоненты: `PascalCase.tsx` (например, `MovieCard.tsx`, `SigninForm.tsx`)
- Хуки: `useSomething.ts`

**Экспорты — только именованные, без default-экспортов для features/widgets/ui-pages**
```ts
// widgets/header/index.ts
export { Header } from './ui/Header';

// импорт всегда из корня модуля
import { Header } from '@/widgets/header';
```

**Path alias**: `@/` → `src/`

## API-слой

`apiFetch` (`src/shared/api/http/fetch.ts`) — единственная HTTP-обёртка. Передаёт `credentials: 'include'`, поддерживает сокращение `json` для тела запроса. Бросает типизированный `ApiError` при не-OK ответах.

Два бэкенда, настраиваемых через переменные окружения (обязательны при старте):
- `NEXT_PUBLIC_API_URL` — основной бэкенд (авторизация, сохранённые фильмы, пользователь)
- `NEXT_PUBLIC_NOMOREPARTIES_URL` — каталог beatfilm

Для **серверных компонентов**, которым нужны куки авторизации, передавайте их явно:
```ts
// src/entities/movie/api/server/getSavedMovies.ts
const cookieHeader = await getCookieHeader(); // shared/lib/server
apiFetch<SavedMovie[]>('/movies', { headers: { cookie: cookieHeader } });
```

Используйте `tryApi()`, чтобы получить безопасный тип результата вместо выброса исключения:
```ts
const result = await tryApi(getUser); // { ok: true, data } | { ok: false, error }
if (!result.ok) redirect(routes.signin);
```

Серверные запросы используют `React.cache()` для дедупликации в рамках одного запроса (`getBeatfilmMovies`, `getSavedMovies`).

## Поток аутентификации

- Авторизация основана на куках (кука `jwt`, выставляется бэкендом).
- Защищённые маршруты находятся в `src/app/(protected)/` — `ProtectedLayout` читает куку через `getAuthToken()` (server-only) и редиректит на `/signin` при её отсутствии.
- После успешной проверки данные пользователя передаются в `UserProvider` (контекст entity), чтобы клиентские компоненты могли получить их через `useUser()`.

## Паттерны клиентского состояния

- **Состояние поиска и фильтрации** → URL search params (`?query=&short=1`). `SearchMoviesForm` использует `router.replace()` с `scroll: false`.
- **Состояние пользователя** → `UserContext`, инициализируется на сервере в `ProtectedLayout`.
- **Мутации** → TanStack Query `useMutation` + `react-hook-form`. Паттерн: API-ошибки записываются в поле `root` формы.

## Серверные компоненты и поток данных

Компоненты `ui-pages` — это async Server Components, которые получают данные и передают их клиентским потомкам:
```ts
// src/ui-pages/movies/ui/MoviesPage.tsx
export async function MoviesPage({ isShortOnly, searchQuery }: Props) {
  const beatfilmMovies = await getBeatfilmMovies();
  const savedMovies = await getSavedMovies();
  const merged = mergeBeatfilmWithSaved({ beatfilmMovies, savedMovies });
  const filtered = filterMovies({ movies: merged, query: searchQuery, isShortOnly });
  // ...
}
```
Страница в `app/` передаёт URL search params в компонент ui-page.

## Стилизация

- **Tailwind CSS v4** + `clsx` для условных классов.
- Кастомные утилитарные классы, определённые глобально: `page-root`, `action-fade`, `container`.
- Переключение темы через `next-themes` (`ThemeProvider` в `shared/providers`).
- Точки монтирования порталов объявлены в корневом лэйауте: `#drawer-root`, `#modal-root`.

## Ключевые файлы

| Файл | Роль |
|------|------|
| `src/shared/api/http/fetch.ts` | Основной HTTP-клиент |
| `src/shared/api/http/tryApi.ts` | Обёртка для безопасного результата API |
| `src/shared/config/env.ts` | Валидация переменных окружения (бросает ошибку при отсутствии) |
| `src/shared/lib/server/auth.ts` | `getAuthToken()` — server-only читалка куки |
| `src/shared/routes/routes.ts` | Все константы маршрутов |
| `src/app/(protected)/layout.tsx` | Auth guard + инициализация UserProvider |
| `src/entities/movie/model/types.ts` | Основные доменные типы (`Movie`, `BeatfilmMovie`, `SavedMovie`) |

