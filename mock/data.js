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
      "fieldset": "fio",
      "option": {
        "required": true
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
        "required": true
      }
    },
    {
      "label": "Отчество",
      "type": "text",
      "id": "patronymic",
      "fieldset": "fio",
      "option": {
        "required": true
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
      "option": {
        "required": false
      }
    }
  ],
  "submit": {
    "text": "Полететь на Марс"
  }
}`
