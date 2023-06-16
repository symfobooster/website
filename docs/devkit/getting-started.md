# Установка

Установите Symfobooster в свой проект используя Composer

```bash
composer require symfobooster/devkit
```

::: tip
Если у вас ещё нет проекта, то вы можете использовать [Symfobooster Template](/template/getting-started.html) для его создания.
Там уже всё установлено и настроено.
:::

Добавьте бандл в конфиг Symfony  
// config/bundles.php
```php{6}
<?php

return [
    Symfony\Bundle\FrameworkBundle\FrameworkBundle::class => ['all' => true],
    Symfobooster\Base\SymfoboosterBundle::class => ['all' => true],
    Symfobooster\Devkit\DevkitBundle::class => ['dev' => true, 'test' => true],
];
```