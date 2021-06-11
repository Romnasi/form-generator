export const data = `{
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
    {
      "name": "birth-date",
      "legend": "Дата рождения",
      "legendVH": false
    }
  ],
  "fields": [
    {
      "label": "Фамилия",
      "type": "text",
      "id": "lastname",
      "fieldset": "fio",
      "option": {
        "required": true,
        "placeholder": "Введите фамилию"
      }
    },
    {
      "label": "Ранее менялась",
      "type": "checkbox",
      "id": "lastnameIsChanged",
      "fieldset": "fio",
      "option": {
        "required": false
      }
    },
    {
      "label": "Имя",
      "type": "text",
      "id": "name",
      "fieldset": "fio",
      "option": {
        "required": true,
        "placeholder": "Введите имя"
      }
    },
    {
      "label": "Отчество",
      "type": "text",
      "id": "patronymic",
      "fieldset": "fio",
      "option": {
        "required": false,
        "placeholder": "Введите отчество"
      }
    },
    {
      "label": "Имя латиницей",
      "type": "text",
      "id": "lat-name",
      "fieldset": "fio",
      "option": {
        "required": true
      }
    },
    {      "label": "Фамилия латиницей",
      "type": "text",
      "id": "lat-lastname",
      "fieldset": "fio",
      "option": {
        "required": true
      }
    },
    {
      "label": "Год рождения",
      "type": "select",
      "id": "birth-year",
      "fieldset": "birth-date",
      "option": {
        "placeholder": "выберите год",
        "valueStart": 1900,
        "valueEnd": 2003
      }
    },
    {
      "label": "Месяц рождения",
      "type": "select",
      "id": "birth-month",
      "fieldset": "birth-date",
      "option": {
        "placeholder": "выберите месяц",
        "valueStart": 1,
        "valueEnd": 12
      }
    },
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
    },
    {
      "label": "Ваша автобиография",
      "type": "textarea",
      "id": "bio",
      "option": {
        "required": false
      }
    }
  ]
}`
