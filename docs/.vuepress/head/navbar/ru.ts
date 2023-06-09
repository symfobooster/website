import type { NavbarConfig } from '@vuepress/theme-default'

export const navbarRu: NavbarConfig = [
    {
        text: 'Symfobooster',
        // link: '/symfobooster/',
        children: [
            {
                text: 'Основа',
                children: [
                    '/symfobooster/concepts.md',
                    '/symfobooster/input.md',
                    '/symfobooster/service.md',
                    '/symfobooster/output.md',
                ],
            },
        ],
    },
    {
        text: 'Devkit',
        children: [
            {
                text: 'Генераторы кода',
                children: [
                    '/devkit/generator.md',
                ],
            },
            {
                text: 'Тестирование',
                children: [
                    '/reference/bundler/vite.md',
                    '/reference/bundler/webpack.md',
                ],
            },
            {
                text: 'Документация',
                children: [
                    '/reference/default-theme/config.md',
                    '/reference/default-theme/frontmatter.md',
                    '/reference/default-theme/components.md',
                    '/reference/default-theme/markdown.md',
                    '/reference/default-theme/styles.md',
                    '/reference/default-theme/extending.md',
                ],
            },
        ],
    },
    {
        text: 'Template',
        children: [
            {
                text: 'Common Features',
                children: [
                    '/reference/plugin/back-to-top.md',
                    '/reference/plugin/container.md',
                    '/reference/plugin/external-link-icon.md',
                    '/reference/plugin/google-analytics.md',
                    '/reference/plugin/medium-zoom.md',
                    '/reference/plugin/nprogress.md',
                    '/reference/plugin/register-components.md',
                ],
            },
            {
                text: 'Content Search',
                children: [
                    '/reference/plugin/docsearch.md',
                    '/reference/plugin/search.md',
                ],
            },
            {
                text: 'PWA',
                children: [
                    '/reference/plugin/pwa.md',
                    '/reference/plugin/pwa-popup.md',
                ],
            },
            {
                text: 'Syntax Highlighting',
                children: [
                    '/reference/plugin/prismjs.md',
                    '/reference/plugin/shiki.md',
                ],
            },
            {
                text: 'Theme Development',
                children: [
                    '/reference/plugin/active-header-links.md',
                    '/reference/plugin/git.md',
                    '/reference/plugin/palette.md',
                    '/reference/plugin/theme-data.md',
                    '/reference/plugin/toc.md',
                ],
            },
        ],
    },
    {
        text: 'Learn More',
        children: [
            {
                text: 'Website',
                children: [
                    '/advanced/architecture.md',
                    '/advanced/plugin.md',
                    '/advanced/theme.md',
                    {
                        text: 'Cookbook',
                        link: '/advanced/cookbook/',
                    },
                ],
            },
            {
                text: 'Resources',
                children: [
                    '/contributing.md',
                    {
                        text: 'Awesome VuePress',
                        link: 'https://github.com/vuepress/awesome-vuepress',
                    },
                ],
            },
        ],
    },
]