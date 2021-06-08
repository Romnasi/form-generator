import AbstractView from './../utils/abstract.js';

const renderedFieldsets = [];


const createFieldByFieldset = (fieldset, fields, fieldsets) => {
  const filteredFieldData = fields.filter((input) => input.fieldset === fieldset);
  console.log(filteredFieldData)

  return filteredFieldData.map(({label, type, id, isRequired}) => {
    return `<li class='form__item form__item--${type}'>${createInput(label, type, id, isRequired)}</li>`;
  }).join('');
}

const createSingleField = (label, type, id, isRequired) => {
  return `<p class='form__item form__item--${type}'>${createInput(label, type, id, isRequired)}</p>`;
};


const createFieldset = (fieldset, fields, fieldsets) => {
  renderedFieldsets.push(fieldset);

  const fieldsetData = fieldsets.find((fieldsetData) => fieldsetData.name === fieldset);
  const {legend, legendVH} = fieldsetData;

  return (
    `<fieldset class='form__fieldset'>
        <legend class='form__legend ${legendVH ? 'visually-hidden' : ''}'>${legend}</legend>
        <ul class='form__list'>
          ${createFieldByFieldset(fieldset, fields, fieldsets)}
        </ul>
     </fieldset>`
  );
}


const createInput = (label, type, id, isRequired) => {
  return (
    `<label class='form__label form__label--${type}' for='${id}'>${label}</label>
<input class='form__control form__control--${type}' type='${type}' id='${id}' ${isRequired ? 'required' : ''}/>`
  )
}


const createFields = (fields, fieldsets) => {

  return fields.map(({label, type, id, isRequired, fieldset}) => {
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

