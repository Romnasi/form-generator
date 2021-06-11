export const data = `{
  "form": {
    "action": "https://echo.htmlacademy.ru",
    "method": "post",
    "title": "Заявка на экскурсионный полёт на Марс",
    "autocomplete": "off",
    "enctype": "multipart/form-data",
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
        "placeholder": "Введите фамилию",
        "name": "lastname"
      }
    },
    {
      "label": "Ранее менялась",
      "type": "checkbox",
      "id": "lastnameIsChanged",
      "fieldset": "fio",
      "option": {
        "required": false,
        "name": "lastnameIsChanged"
      }
    },
    {
      "label": "Имя",
      "type": "text",
      "id": "name",
      "fieldset": "fio",
      "option": {
        "required": true,
        "placeholder": "Введите имя",
        "name": "name"
      }
    },
    {
      "label": "Отчество",
      "type": "text",
      "id": "patronymic",
      "fieldset": "fio",
      "option": {
        "required": false,
        "placeholder": "Введите отчество",
        "name": "patronymic"
      }
    },
    {
      "label": "Имя латиницей",
      "type": "text",
      "id": "lat-name",
      "fieldset": "fio",
      "option": {
        "required": true,
        "name": "lat-name",
        "pattern": "[A-Za-z]"
      }
    },
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
    {
      "label": "Год рождения",
      "type": "select",
      "id": "birth-year",
      "fieldset": "birth-date",
      "option": {
        "placeholder": "Выберите год",
        "valueStart": 1900,
        "valueEnd": 2003,
        "name": "birth-year"
      }
    },
    {
      "label": "Месяц рождения",
      "type": "select",
      "id": "birth-month",
      "fieldset": "birth-date",
      "option": {
        "placeholder": "Выберите месяц",
        "valueStart": 1,
        "valueEnd": 12,
        "name": "birth-month"
      }
    },
    {
      "label": "День рождения",
      "type": "select",
      "id": "birth-day",
      "fieldset": "birth-date",
      "option": {
        "placeholder": "Выберите день",
        "valueStart": 1,
        "valueEnd": 31,
        "name": "birth-day"
      }
    },
    {
      "label": "Семейное положение",
      "type": "select",
      "id": "family-status",
      "fieldset": "birth-date",
      "option": {
        "placeholder": "Выберите ваш статус",
        "selValues": ["женат/замужем", "в «гражданском браке»", "разведён", "холост", "вдовец"],
        "name": "family-status"
      }
    },
    {
      "label": "Образование",
      "type": "select",
      "id": "education",
      "option": {
        "placeholder": "Выберите образование",
        "selValues": ["высшее", "среднее специальное", "среднее", "студент"],
        "name": "education"
      }
    },
    {
      "label": "Ваша автобиография",
      "type": "textarea",
      "id": "bio",
      "option": {
        "required": false,
        "placeholder": "В развлекательном стиле",
        "name": "bio"
      }
    },
    {
      "label": "Номер вашей заявки",
      "type": "text",
      "id": "request-number",
      "option": {
        "required": false,
        "value": "34534-4234-43344",
        "readonly": true,
        "name": "request-number"
      }
    },
    {
      "label": "Размер обуви",
      "type": "number",
      "id": "shoe-size",
      "option": {
        "min": 20,
        "max": 55,
        "step": 1,
        "name": "shoe-size"
      }
    }
  ]
}`
