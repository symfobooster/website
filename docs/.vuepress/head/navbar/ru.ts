import type { NavbarConfig } from '@vuepress/theme-default'

export const navbarRu: NavbarConfig = [
    {
        text: 'Symfobooster',
        children: [
            {
                text: 'Руководство',
                children: [
                    '/symfobooster/getting-started.md',
                    '/symfobooster/concepts.md',
                    '/symfobooster/configuration.md',
                    '/symfobooster/routing.md',
                    '/symfobooster/input.md',
                    '/symfobooster/service.md',
                    '/symfobooster/output.md',
                    '/symfobooster/testing.md',
                    '/symfobooster/documentation.md',
                    '/symfobooster/convention.md',
                ],
            },
            {
                text: 'Плагины',
                children: [
                    '/symfobooster/plugins/data-provider.md'
                ],
            }
        ],
    },
    {
        text: 'Devkit',
        children: [
            {
                text: 'Генераторы кода',
                children: [
                    '/devkit/getting-started.md',
                    '/devkit/generator.md',
                ],
            },
            {
                text: 'Тестирование',
                children: [
                    '/devkit/generator.md',
                ],
            },
        ],
    },
    {
        text: 'Template',
        children: [
            {
                text: 'Руководство',
                children: [
                    '/template/getting-started.md',
                ],
            },
        ],
    },
]