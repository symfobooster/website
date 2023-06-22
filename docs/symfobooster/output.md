# Output

Output это объекты, которые хранят данные для передачи пользователю. Добавьте все необходимые поля в объекты, пометьте 
из специальным аттрибутом и они будут превращениы в json с помощью [Symfony Serializer](https://symfony.com/doc/current/components/serializer.html)

Создадм аутпут из которого формируется успешный ответ от эндпоинта получения профиля пользователя.
```php
<?php

namespace App\User\Profile;

use Symfobooster\Base\Output\Attributes\SuccessMarker;
use Symfobooster\Base\Output\OutputInterface;

#[SuccessMarker]
class Output
{
    public int $id;
    public string $name;
    public string $email;

    public function __construct(int $id, string $name, string $email)
    {
        $this->id = $id;
        $this->name = $name;
        $this->email = $email;
    }
}
```
Обратите внимание на атрибут, которым помечен класс. Благодаря этому атрибуту будет возвращён HTTP Status 200. 
::: tip
Вместо атрибута вы можете использовать наследование от встроенных аутпутов.  
Например здесь достаточно отнаследоваться от класса `Symfobooster\Base\Output\Success` и вы получите такой же результат.
:::

Посмотрим на сервис, который использует такой аутпут:
```php
<?php

namespace App\User\Profile;

use Symfobooster\Base\Input\InputInterface;
use App\User\Prifile\Output;
use Symfobooster\Base\Service\ServiceInterface;

class ProfileService implements ServiceInterface
{
    public function behave(InputInterface $input): mixed
    {
        $profile = $this->repository->getById($input->id);
        
        return new Output(
            $profile->getId,
            $profile->getName(),
            $profile->getEmail
        );
    }
}
```

Таким образом тело ответа будет например таким:
```json
{
  "id": 108,
  "name": "Buddha",
  "email": "siddhartha.gautama@enlightenment.com"
}
```

## Встроеные аутпуты

В некоторых случаях вам не нужно создавать отдельный класс для стандартного ответа. Мы уже подготовили несколько клссов 
для таких случаев.

### Success
*HTTP Status: 200*

### Created
*HTTP Status: 201*

Возвращайте аутпут Created тогда, когда создали какую-то сущность.

```php
<?php

namespace App\Product\Create;

use Symfobooster\Base\Input\InputInterface;
use Symfobooster\Base\Output\Created;
use Symfobooster\Base\Output\OutputInterface;
use Symfobooster\Base\Service\ServiceInterface;

class CreateService implements ServiceInterface
{
    public function behave(InputInterface $input): OutputInterface
    {
        // $this->repository->persist($entity);
        
        return new Created();
    }
}
```

Часто бывает недостаточно вернуть статус 201, а необходимо вернуть и идентификатор созданой записи. Для этого есть классы,
которые хранят числовой или строковый идентификатор.

Класс CreatedInt хранит числовой:
```php
use Symfobooster\Base\Output\CreatedInt;

class CreateService implements ServiceInterface
{
    public function behave(InputInterface $input): OutputInterface
    {
        return new CreatedInt(108);
    }
}
```

Через CreatedString можно передать uuid:
```php
use Symfobooster\Base\Output\CreatedString;

class CreateService implements ServiceInterface
{
    public function behave(InputInterface $input): OutputInterface
    {
        return new CreatedString('123e4567-e89b-12d3-a456-426655440000');
    }
}
```

### Not found
### Invalid
### Error