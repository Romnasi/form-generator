import AbstractView from './../utils/abstract.js';

const renderedFieldsets = [];
// для уникализации value
let lastId = 0;


const createOptionSet = (option, id, isOption) => {
  if (option.valueStart) {
    const {valueStart, valueEnd} = option;
    let optionSet = '';
    for (let i = valueStart; i <= valueEnd; i++) {
      optionSet += `<${isOption ? `option class="form__option" value="${id + '-' + i}` : `div class="selectCustom-option" data-value="${id + i}"`}">
        ${i}
      </${isOption ? 'option' : `div`}>`;
      lastId = i;
    }
    return optionSet
  }
  return `<option value="sel">sfdfsd</option>`
}


const createFieldByFieldset = (fieldData) => {
  return fieldData.map(({label, type, id, option}) => {
    return `<li class='form__item form__item--${type}'>${createField(label, type, id, option)}</li>`;
  }).join('');
}


const createFieldset = (fieldset, fields, fieldsets) => {
  renderedFieldsets.push(fieldset);

  const filteredFieldData = fields.filter((field) => field.fieldset === fieldset);

  // Если в fieldset только 1 поле - это не fieldset
  if (filteredFieldData.length === 1) {
    const [{label, type, id, option}] = filteredFieldData;
    return createSingleField(label, type, id, option);
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


const createTextarea = (label, type, id, option) => {
  const {required} = option;

  return (
    `<label class='form__label form__label--${type}' for='${id}'>${label}</label>
<textarea class='form__control form__control--${type}' type='${type}' id='${id}' ${required ? 'required' : ''}></textarea>`
  );
}


const createSelect = (label, type, id, option) => {
  const {placeholder} = option;

  return (`<span class="form__label form__label--select" id="${id}">
      ${label}
    </span>
    <div class="form__select-wrapper">
      <select class="form__select-native" aria-labelledby="${id}">
        <option value="sel" disabled="" selected="">${placeholder}</option>
        ${createOptionSet(option, id, true)}

      </select>

      <div class="form__select-custom js-selectCustom" aria-hidden="true">
        <div class="form__select-custom--trigger">${placeholder}</div>
        <div class="selectCustom-options">
          ${createOptionSet(option, id, false)}
        </div>
      </div>
    </div>`);
}


const createField = (label, type, id, option) => {
  if (type === 'textarea') {
    return createTextarea(label, type, id, option);
  }
  if (type === 'select') {
    return createSelect(label, type, id, option);
  }

  const {required, placeholder} = option;

  return (
    `<label class='form__label form__label--${type}' for='${id}'>${label}</label>
<input class='form__control form__control--${type}' type='${type}' id='${id}' ${placeholder ? `placeholder="${placeholder}"` : ''} ${required ? 'required' : ''}/>`
  );
}


const createSingleField = (label, type, id, option) => {
  return `<p class='form__item form__item--${type}'>${createField(label, type, id, option)}</p>`;
};


const createFields = (fields, fieldsets) => {

  return fields.map(({label, type, id, option, fieldset}) => {
    // Если поле содержит fieldset функция сразу создаст все поля с таким же fieldset'ом
    // поэтому поля с таким же значением пропускаем
    if (fieldset) {
      return !renderedFieldsets.includes(fieldset)
        ? createFieldset(fieldset, fields, fieldsets)
        : '';
    } else {
      return  createSingleField(label, type, id, option);
    }
  }).join('');
};


const createSubmitButton = (text) => {
  return `<button class="form__button-submit" type='submit'>${text}</button>`;
}


const createFormTemplate = ({form, fields, fieldsets}) => {
  const {action, method, title, btnText} = form;

  return (
    `<form class='form' action='${action}' method='${method}'>
        <h2 class='form__title'>${title}</h2>
        <div class="demo__form-wrapper form-wrapper container">
          ${createFields(fields, fieldsets)}
          ${createSubmitButton(btnText)}
        </div>


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

