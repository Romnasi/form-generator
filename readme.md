# Генератор форм
Модуль генерирует форму c необходимыми полями на основе JSON заданного формата.

## Возможности
#### Создает самые распространенные элементы форм:
- input: text, tel, date, radio, checkbox, file,
  password, email, hidden, range, url, search
- textarea
- select - гибридный с подменной нативного. Нативный селект, видимый и доступный по умолчанию.
  Кастомный селект, скрытый до тех пор, пока не произойдёт взаимодействие посредством мыши.


#### Поддержка параметров полей формы:
Значения параметров соответствуют спецификации.
Если параметр не имеет значение, то при наличии в JSON достаточно указать в значении `true`.
- required
- disabled
- readonly
- placeholder
- min
- max
- step
- name
- value
- checked
- pattern

<br>

## Быстрый старт
Для запуска демо `npm i` затем `npm start`. Файл имитирующий JSON лежит по пути `json/data.js`

Генератор форм принимает на вход объект преобразрванный из JSON.
Поля первого уровня: `form`, `fieldsets` и `fields`.
1. `form` - отвечает за основные параметры формы
2. `fieldsets` - нужен для описания набора полей
3. `fields` - содержит всю информацию по полям формы


Ваша первая форма с двумя полями!
```
{
  "form": {
    "action": "www.example.ru",
    "method": "post",
    "title": "Заявка на экскурсионный полёт на Марс",
    "btnText": "Полететь на Марс"
  },
  "fieldsets": [
    {
      "name": "fio",
      "legend": "ФИО заявителя",
      "legendVH": false
    },
  "fields": [
    {
      "label": "Фамилия",
      "type": "text",
      "id": "lastname",
      "fieldset": "fio",
      "option": {
        "required": true
      }
    },
    {
      "label": "Имя",
      "type": "text",
      "id": "name",
      "fieldset": "fio",
      "option": {
        "required": true
      }
    }
  ]
}
```

<br>

## JSON. Описание формата


### Параметры формы - "form"
Поле "form" содержит основные параметры формы `action`, `method`, `autocomplete`, `enctype`, `title` - заголовк формы,
`btnText` - текст кнопки отправки формы.
```
{
  "form": {
    "action": "www.example.ru",
    "method": "post",
    "title": "Заявка на экскурсионный полёт на Марс"
  },
}
```
<br>

### Наборы полей - "fieldset"
При генерации формы используется семантический тег `<fieldset>`.
Тэг объединяет связанные по смыслу поля - самое очевидное - набор чекбоксов,
радио кнопок, группу текстовых полей отвечающих на общий вопрос.
Настоятельно рекомендуем его использовать в большинстве случаев. В остальных случаях будет создаваться обертка из `<p>`.

```
{
  "fieldsets": [
    {
      "name": "fio",
      "legend": "ФИО заявителя",
      "legendVH": false
    },
}
```
Для добавляения поля в `fieldset` также необходимо указать название нужного `fieldset`
в одноименном ключе в объекте описывающем `fields`:
```
{
  "fields": [
    {
      "label": "Фамилия",
      "type": "text",
      "id": "lastname",
      "fieldset": "fio",  // Привязываем поле к fieldset
      "option": {
        "required": true
      }
    }
    ],
}
```

<br>


### Поля формы - "fields"
Вся информации по полям формы содержится в "fields", содержащем массив объектов, описывающих поля формы.
```
{
  "fileds": [
    {}, // Объект описывающий поле 1
    {}, // Объект описывающий поле 2
    {} // Объект описывающий поле 3
  ],
}
```

<br>

### Обязательные параметры полей
Поля в `fields` первого уровня - `label`, `type`, `id`, `fieldset` - обязательные для заполнения и напрямую влияют на доступность и корректность работы формы.
Можно опустить поле `fieldset`, в случае если поле формы одиночное или использовать значение `false`
```
{
  "fields": [
    {
      "label": "Ваша любимая книга",
      "type": "text",
      "id": "book",
      "fieldset": false,
      "option": {
        "required": true
      }
    }
    ],
}
```

<br>

### Дополниетельные параметры полей
Дополнительные параметры полей прописываются в `option`. Дополнительные параметры помогают
пользователю получить дополнительную информацию,
а также реализовать простую валидацию на уровне html. На данный момент поддерживаются следующие параметры полей:
- `required`
- `disabled`
- `readonly`
- `placeholder`
- `min`, `max`, `step` - у полей типа `date`, `number`, `range`
- `name`
- `value`
- `checked`
- `pattern`

```
{
  "label": "Фамилия латиницей",
  "type": "text",
  "id": "lat-lastname",
  "fieldset": "fio",
  "option": {
    "required": true,
    "name": "lat-lastname",
    "pattern": "[A-Za-z]"
  }
},
```

<br>

### Select
Для создания селекта укажите <code>"type": "select"</code>. Значения селекта укажзываются в option,
ключ `selValues`, значение - массив строк, отрисовка в том же порядке что и запись в массиве.
```
"fields": [
  {
    "label": "Подарок кошке",
    "type": "select",
    "id": "gift",
    "fieldset": "cat-gift",
    "option": {
      "placeholder": "Выберите подарок",
      "selValues": ["Мячик", "Новая миска", "Прививка"]
    }
  }
],
```

В случае если значения селекта - возрастающая последовательность цифр с шагом 1 (например месяцы, дни месяца) - селект поддерживает автомтическую генерацию последовательности по первому и последнему значению.
Для этого в поле "option" укажите ключи "valueStart" и "valueEnd" с соответствующими значениями.

```
"fields": [
  {
    "label": "День рождения",
    "type": "select",
    "id": "birth-month",
    "fieldset": "birth-date",
    "option": {
      "placeholder": "выберите день",
      "valueStart": 1,
      "valueEnd": 31
    }
  }
],
```

<br>


## Доступность
Для улучшения доступности генерируемых форм особое внимание уделено семантической верстке. Также использовались практики позволяющие "видеть" скринридерам информацию скрытых для обычных пользователей, например, в силу дизайна или очевидности для обычных пользователей, но полезную для людей использующих скринридеры. В проект использованы:
* <code>\<fieldset\></code> - оборачивает связанные по смыслу поля.
* <code>\<ul\></code> -  внутри <code>\<fieldset\></code> поля собраны в ненумерованный список. Это позволяет пользователям скринридеров получать информацию о количестве полей в данной группе полей.
* <code>\<legend\></code> - помещается внутри <code>\<fieldset\></code> дает именование группе полей. Так как <code>\<legend\></code> часто скрывается подключена поддержка <code>visually-hidden</code>.
* <code>label</code> - "привязывается" к полям с помощью for, расширяет зону клика полей и описывает поле.
* <code>visually-hidden</code> - CSS-класс, позволяющий доступно прятать информацию от обычного пользователя, но быть доступной для пользователей скринридера. Также эффективный инструменты для кастомизации различных чекбоксов, радио-кнопок.

<br>

## Стили
Генератор форм поддерживает подгрузку только используемых стилей в форме стилей. Например, если в форме не используется
селект или чекбоксы, соответствующие стили не будут подгружены в тег `<style>`.

При написании стилей использовалась [VKUI](https://vkcom.github.io/VKUI/).
