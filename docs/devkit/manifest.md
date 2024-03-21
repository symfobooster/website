# Манифест

Манифест определяет каким будет сгенерированный эндпоинт. Для этого необходимо заполнить необходимые вам поля.

Ниже приведён пример готового манифеста:
```yaml
method: post
controller: user
action: create
type: create
service:
  transactional: true
input:
  fields:
    login:
      type: string
      required: true
    password:
      type: string
      required: true
output:
  fields:
    id:
      type: string
```

## Поля
Манифест представляет собой дерево параметров. В каждом свойстве могут быть объект или массив объектов. Рассмотрим каждый объект.
### Manifest
Корневой объект, которые определяет основные параметры.

`method` по умолчанию: `GET`
HTTP-метод, строка в любом регистре. Примеры: `get`, `post`, `delete`.

`controller` обязателен
Название множества эндпоинтов. Примеры: `user`, `cart`, `page`.
Больше про контроллер читай в разделе [Роутинг](/symfobooster/routing.html).

`action` *обязателен*
Название эндпоинта. Примеры: `create`, `view`, `set-status`.
Больше про контроллер читай в разделе [Роутинг](/symfobooster/routing.html).

`type`
Тип генерируемого эндпоинта. Помогает сгенерировать специфичный код. Например при значении `delete` будет сгенерирован код для удаления и добавлена транзакция.
Возможные значения:
- default
- list
- view
- create
- update
- delete

`service`
Объект Service

`input`
Объект Input

`output`
Объект Output
### Service

`transactional`
Булево значение, которое показывает, что эндпоинт должен быть обёрнут в транзакцию.

`repository`
Id класса репозитория в формате `App\Repository\MyRepository`.

`entity`
Id класса сущности в формате `App\Entity\MyEntity`.