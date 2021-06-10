export const data = `{
  "form": {
    "action": "www.example.ru",
    "method": "post",
    "title": "Заявка на экскурсионный полёт на Марс"
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
      "isRequired": true,
      "fieldset": "fio"
    },
    {
      "label": "Ранее менялась",
      "type": "checkbox",
      "id": "lastnameIsChanged",
      "isRequired": false,
      "fieldset": "fio"
    },
    {
      "label": "Имя",
      "type": "text",
      "id": "name",
      "isRequired": true,
      "fieldset": "fio"
    },
    {
      "label": "Отчество",
      "type": "text",
      "id": "patronymic",
      "isRequired": false,
      "fieldset": "fio"
    },
    {
      "label": "Имя латиницей",
      "type": "text",
      "id": "lat-name",
      "isRequired": true,
      "fieldset": "fio"
    },
    {      "label": "Фамилия латиницей",
      "type": "text",
      "id": "lat-lastname",
      "isRequired": true,
      "fieldset": "fio"
    },
    {
      "label": "Год рождения",
      "type": "select",
      "id": "age",
      "fieldset": "birth-date",
      "option": {
        "placeholder": "выберите год"
      }
    },
    {
      "label": "Дата рождения",
      "type": "select",
      "id": "age",
      "fieldset": "birth-date",
      "option": {
        "placeholder": "выберите месяц"
      }
    },
    {
      "label": "Ваша автобиография",
      "type": "textarea",
      "id": "bio",
      "isRequired": false
    }
  ],
  "submit": {
    "text": "Полететь на Марс"
  }
}`
