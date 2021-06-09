import AbstractView from './../utils/abstract.js';

const renderedFieldsets = [];


const createFieldByFieldset = (fieldData) => {
  return fieldData.map(({label, type, id, isRequired}) => {
    return `<li class='form__item form__item--${type}'>${createField(label, type, id, isRequired)}</li>`;
  }).join('');
}


const createSingleField = (label, type, id, isRequired) => {
  return `<p class='form__item form__item--${type}'>${createField(label, type, id, isRequired)}</p>`;
};


const createFieldset = (fieldset, fields, fieldsets) => {
  renderedFieldsets.push(fieldset);

  const filteredFieldData = fields.filter((field) => field.fieldset === fieldset);

  // Если в fieldset только 1 поле - это не fieldset
  if (filteredFieldData.length === 1) {
    const [{label, type, id, isRequired}] = filteredFieldData;
    return createField(label, type, id, isRequired);
  }

  const fieldsetData = fieldsets.find((fieldsetData) => fieldsetData.name === fieldset);
  const {legend, legendVH} = fieldsetData;

  return (
    `<fieldset class='form__fieldset form__fieldset--${fieldset}'>
        <legend class='form__legend form__legend--${fieldset} ${legendVH ? 'visually-hidden' : ''}'>${legend}</legend>
        <ul class='form__list form__list--${fieldset}'>
          ${createFieldByFieldset(filteredFieldData)}
        </ul>
     </fieldset>`
  );
}


const createTextarea = (label, type, id, isRequired) => {
  return (
    `<label class='form__label form__label--${type}' for='${id}'>${label}</label>
<textarea class='form__control form__control--${type}' type='${type}' id='${id}' ${isRequired ? 'required' : ''}></textarea>`
  );
}


const createField = (label, type, id, isRequired) => {
  if (type === 'textarea') {
    return createTextarea(label, type, id, isRequired);
  }

  return (
    `<label class='form__label form__label--${type}' for='${id}'>${label}</label>
<input class='form__control form__control--${type}' type='${type}' id='${id}' ${isRequired ? 'required' : ''}/>`
  );
}


const createFields = (fields, fieldsets) => {

  return fields.map(({label, type, id, isRequired, fieldset}) => {
    // Если поле содержит fieldset функция сразу создаст все поля с таким же fieldset'ом
    // поэтому поля с таким же значением пропускаем
    if (fieldset) {
      return !renderedFieldsets.includes(fieldset)
        ? createFieldset(fieldset, fields, fieldsets)
        : '';
    } else {
      return  createSingleField(label, type, id, isRequired);
    }
  }).join('');
};


const createSubmitButton = ({text}) => {
  return `<button class="form__button-submit" type='submit'>${text}</button>`;
}


const createFormTemplate = ({form, fields, submit, fieldsets}) => {
  const {action, method, title} = form;

  return (
    `<form class='form container' action='${action}' method='${method}'>
        <h2 class='form__title'>${title}</h2>
        ${createFields(fields, fieldsets)}
        ${createSubmitButton(submit)}

        <style>

        </style>
    </form>`
  );
}


export default class Form extends AbstractView {
  constructor(data) {
    super();

    this._data = data;
  }

  getTemplate() {
    return createFormTemplate(this._data);
  }
}

