import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarRu: SidebarConfig = {
    '/symfobooster/': [
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
    ],
    '/devkit/': [
        {
            text: 'Руководство',
            children: [
                '/devkit/getting-started.md',
                '/devkit/generator.md',
            ],
        },
    ],
    '/template/': [
        {
            text: 'Руководство',
            children: [
                '/template/getting-started.md',
            ],
        },
    ],
}