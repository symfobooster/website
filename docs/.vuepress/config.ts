import { defineUserConfig } from '@vuepress/cli'
import { defaultTheme } from '@vuepress/theme-default'
import { head, navbarRu, sidebarRu } from './head/index';

export default defineUserConfig({
    title: 'Hello Symfobooster',
    description: 'Just playing around',
    head,
    locales: {
        '/': {
            lang: 'ru-RU',
            title: 'Symfobooster - библиотека для создания API',
            description: 'Сделай свой процесс разработки более эффективным используя Symfobooster',
        },
        // '/en/': {
        //     lang: 'en-US',
        //     title: 'symfobooster',
        //     description: 'symfobooster',
        // },
    },
    theme: defaultTheme({
        logo: '/logo-light.svg',
        logoDark: '/logo-dark.svg',
        repo: 'symfobooster',
        docsDir: 'docs',

        // theme-level locales config
        locales: {
            /**
             * English locale config
             *
             * As the default locale of @vuepress/theme-default is English,
             * we don't need to set all of the locale fields
             */
            '/en/': {
                // navbar
                // navbar: navbarEn,
                selectLanguageName: 'English',
                selectLanguageText: 'English',
                selectLanguageAriaLabel: 'English',
                // sidebar
                // sidebar: sidebarEn,
                // page meta
                editLinkText: 'Edit this page on GitHub',
            },

            /**
             * Russian locale config
             */
            '/': {
                // navbar
                navbar: navbarRu,
                selectLanguageName: 'Русский',
                selectLanguageText: 'Русский',
                selectLanguageAriaLabel: 'Русский',
                // sidebar
                sidebar: sidebarRu,
                // page meta
                editLinkText: 'Отредактируй это на GitHub-e',
                lastUpdatedText: 'Страница обновлена',
                contributorsText: 'Автор',
                // custom containers
                tip: 'Информация',
                warning: 'Замечание',
                danger: 'Внимание!',
                // 404 page
                notFound: [
                    'Страница не найдена',
                ],
                backToHome: 'Домой',
                // a11y
                openInNewWindow: 'Открыть в новом окне',
                toggleColorMode: 'Переключить дизайн',
                toggleSidebar: 'Скрыть/показать боковое меню',
            },
        },
    }),
})