# Конфигурация

Конфигурировние сервисов играет ключевую роль в построении свазей между классами.  
Зависимости классов для каждого эндпоинты мы рекомендуем описывать а одном файле. Зависимсти одного модуля описывать в
файле обобщающей конфигурации.

Рассмотрим пример эндпоинта профиля пользователя. В оснвной файл конфигурации добавим импорт файла-аггрегатора конфигов модулей:

// config/services.yml
```yaml
...
imports:
    - './endpoints/endpoints.yml'
```

Файл endpoints.yml аггрегирует в себе список всех модулей. Сейчас у нас только один модуль - модуль пользователей.

// config/endpoints/endpoints.yml
```yaml
imports:
  -
    resource: user.yml
```
::: warning
Файл `endpoints.yml` может показаться излишним, но он необходим, если вы будете использовать
генератор кода [Symfobooster Devkit](/devkit/getting-started.html)
:::


В файле модуля описан только список эндпоинтов

// config/endpoints/user.yml
```yaml
imports:
  -
    resource: user/profile.yml
```

::: tip
Что-бы не создавать все эти файлы руками воспользуйтесь генератором эндпоинтов в [Symfobooster Devkit](/devkit/getting-started.html)
:::

Наконец мы добрались до конфигурации эндпоинта

// config/endpoints/user/profile.yml
```yaml
services:
  user.profile.controller:
    public: true
    parent: symfobooster.controller
    arguments:
      $service: '@user.profile.service'
      $inputLoader: '@user.profile.input'
  user.profile.service:
    class: App\User\Profile\ProfileService
    arguments:
      $repository: '@App\User\Domain\UserRepositoryInterface'
  user.profile.input:
    parent: symfobooster.input.loader
    arguments:
      $input: '@App\User\Profile\ProfileInput'
```

Рассмотрим каждый компонент отдельно.  

## Контроллер
::: tip
Подробнее о контроллере читайте в разделе [Controller](/symfobooster/controller.html)
:::
Контроллер `user.profile.controller` принимает сервис и инпут. Это стандартный компонент каждого эндпоинта.

## Сервис
::: tip
Подробнее о сервисе читайте в разделе [Service](/symfobooster/service.html)
:::

Сервис `user.profile.service` содержит вашу бизнес-логику. В данном случае получение информации о пользователе из базы данных, проверка, 
что пользователь существует и формирование ответа. Сервис зависит от интерфейса репозитория. Поскольку репозиторий 
это класс необходимый для всего модуля, то укажем его в файле конфигурации модуля.

`config/endpoints/user.yml`
```yaml{1-3}
services:
  App\User\Domain\UserRepositoryInterface:
    class: App\User\Repository\UserRepository

imports:
  -
    resource: user/profile.yml
```


## Инпут
::: tip
Подробнее об инпуте читайте в разделе [Input](/symfobooster/input.html)
:::

Инпут `user.profile.input` это описание всех входящих данных, которые необходимы для работы эндпоинта. В данном случае 
инпут будет содержать одно поле - идентификатор пользователя и валидаторы для него.


В этом файле вам необходимо дописать все необходимые для работы эндпоинта классы.

## Дополнительные возможности

Symfobooster содержит компоненты, которые помогут вам решать и другие проблемы.

### Transactional

Это класс декоратор, который декорирует ваш сервис и обеспечивает работу транзакции в рамках одного эндпоинта. Вам не 
нужно добавлять транзакцию в ваш сервис в большинстве случаев.  
Расширим конфигурацию нашего эндпоинта, хотя в данном случае транзакция не нужна так как эндпоинт ничего не сохраняет.

// TODO