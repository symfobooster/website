# Роутинг

Задача роутинга привести запрос к вашему сервису.  
Для настройки роутинга необходимо добавить запись в корневой файл роутинга `routes.yml` и создать файл с роутингом к 
вашим эндпоинтам.
::: tip
Соглашение лучше конфигурации  
Почитайте больше о соглашениях [Соглашения](/symfobooster/convention.html)
:::

`config/routes.yml`
```yaml
user:
  resource: ./routes/user.yml
  prefix: /user/
```

Создадим файл `user.yml` и опишем к нему путь к контроллеру, метод и адрес.

`config/routes/user.yml`
```yaml
user_registration:
  path: /registration
  controller: 'user.registration.controller::action'
  methods:
    - POST
```

Здесь мы указали, что по адресу `/user/registration`, по методу `POST` выполнится метод `action` контроллера `user.registration.controller`
