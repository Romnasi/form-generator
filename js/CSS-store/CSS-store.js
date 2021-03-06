// Запись используемых элементов,
// позволяет подгружать в style только нужные стили
export const usedFormElements = {
  default: true,
  fieldset: false,
  formItem: false,
  checkbox: false,
  radio: false,
  button: false,
  select: false,
}


export const CSSStore = {
  default: `:root {
  --white: #fff;
  --background_page: #ebedf0;
  --for-border: #D3D9DE;
  --steel-gray: #F7F8FA;
  --accent: #3f8ae0;
  --hover-border: rgba(0, 0, 0, 0.24);
  --button_primary_background: #4986cc;
  --button_primary_foreground: #ffffff;
  --button-accent: #5181b8;
  --text_primary: #000000;

  /*  Fonts */
  --font-common: 'Roboto', Arial, sans-serif;
  --font-tt: 'Roboto', Arial, sans-serif;
}

/* Container */
.form__container {
  min-width: 288px;
  padding: 0 16px;
}

@media (min-width: 768px) {
  .form__container {
    padding: 0 24px;
  }
}


/* Form*/
.form {
  display: grid;
  grid-template-columns: 1fr;
  background-color: var(--white)
}

@media (min-width: 768px) {
  .form {
    box-sizing: border-box;
    background-color: var(--background_page);
  }
}

.form__title {
  margin: 0 0 12px;
  padding: 13px 16px;
  background-color: var(--white);

  font-size: 23px;
  line-height: 28px;

  border-bottom: 1px solid var(--for-border);
  font-weight: 800;
}

@media (min-width: 768px) {
  .form__title {
    margin-bottom: 16px;
    padding-left: 24px;
    padding-right: 24px;
    border: none;
  }
}

.form-wrapper {
  background-color: var(--white);

  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 8px;
}

@media (min-width: 768px) {
  .form-wrapper {
    margin: 16px;
  }
}`,
  fieldset: `.form__fieldset {
  margin: 0;
  padding: 0;
  border: none;
}

.form__legend {
  padding-top: 12px;
  padding-bottom: 8px;
  font-size: 14px;
  line-height: 18px;
  font-family: var(--font-common);
}

.form__list {
  margin: 0;
  padding: 0;
  list-style: none;
}`,
  formItem: `.form__item {
  position: relative;

  margin: 0;
  padding-top: 12px;
  padding-bottom: 12px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  font-style: normal;
  font-weight: normal;
}

.form__label {
  margin-bottom: 8px;
  font-size: 14px;
  line-height: 18px;
}

.form__control {
  box-sizing: border-box;
  padding: 9px 12px;

  font-family: var(--font-common);
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 20px;

  background-color: var(--steel-gray);
  border: 1px solid var(--for-border);
  border-radius: 6px;
}


.form__control:focus {
  border-color: var(--accent);
  outline: none;
}


.form__control:hover {
  border-color: var(--hover-border);
}


.form-control::placeholder {
  color: var(--steel-gray);
}`,
  checkbox: `.form__item--checkbox {
  flex-direction: row;
}


.form__label--checkbox {
  order: 1;
}


.form__control--checkbox {
  margin-right: 14px;
  order: -1;
}`,
  radio: `.form__item--radio {
  flex-direction: row;
}


.form__label--radio {
  order: 1;
}


.form__control--radio {
  margin-right: 14px;
  order: -1;
}`,
  button: `.form__button-submit {
  margin-top: 12px;
  margin-bottom: 12px;
  padding: 6px 15px 4px;
  font-family: inherit;
  min-height: 32px;
  color: var(--button_primary_foreground);
  background-color: var(--button_primary_background);
  border: 1px solid transparent;
  border-radius: 8px;
}


.form__button-submit:hover {
  background-color: var(--button-accent);
}`,
  select: `.form__select-native,
.form__select-custom {
  position: relative;
  box-sizing: border-box;

  width: 100%;
  min-height: 40px;
}


.form__select-custom {
  position: absolute;
  top: 0;
  left: 0;
  display: none;
}


@media (hover: hover) {
  .form__select-custom {
    display: block;
  }

  .form__select-native:focus + .form__select-custom {
    display: none;
  }
}


.form__select-native:focus,
.form__select-custom.isActive .orm__select-custom--trigger {
  outline: none;
  border-color: var(--accent);
}


.form__select {
  position: relative;
}


.form__label--select {
  display: block;
}


.form__select-wrapper {
  position: relative;
}


.form__select-native,
.form__select-custom--trigger {
  padding: 9px 12px;

  font-style: normal;
  font-family: var(--font-common);
  font-weight: normal;
  font-size: 15px;
  line-height: 20px;

  background-color: var(--steel-gray);
  border: 1px solid var(--for-border);
  border-radius: 6px;
}


.form__select-native {
  padding: 9px 12px;
  background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cpath d="M0 0h24v24H0z"%3E%3C/path%3E%3Cpath d="M12 14.198L6.64 9.732a1 1 0 10-1.28 1.536l6 5a1 1 0 001.28 0l6-5a1 1 0 10-1.28-1.536L12 14.198z" fill="rgba(0, 0, 0, 0.36" fill-rule="nonzero"%3E%3C/path%3E%3C/g%3E%3C/svg%3E');
  background-size: 24px 24px;
  background-repeat: no-repeat;
  background-position-x: calc(100% - 10px);
  background-position-y: 7px;

  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
}


.form__select-custom--trigger {
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 100%;
  background-color: var(--steel-gray);
  padding: 9px 12px;
  cursor: pointer;
}


.form__select-custom--trigger::after {
  position: absolute;
  content: '';
  background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cpath d="M0 0h24v24H0z"%3E%3C/path%3E%3Cpath d="M12 14.198L6.64 9.732a1 1 0 10-1.28 1.536l6 5a1 1 0 001.28 0l6-5a1 1 0 10-1.28-1.536L12 14.198z" fill="rgba(0, 0, 0, 0.36" fill-rule="nonzero"%3E%3C/path%3E%3C/g%3E%3C/svg%3E');
  top: 7px;
  left: calc(100% - 24px - 10px);
  width: 24px;
  height: 24px;
}


.form__select-custom--trigger:hover {
  border-color: var(--hover-border);
}


.selectCustom-options {
  position: absolute;
  top: 35px;
  left: 0;
  width: 100%;
  border-radius: 0 0 6px 6px;
  background-color: #fff;
  z-index: 1;
  padding: 5px 0;
  display: none;

  overflow: hidden auto;
  height: 150px;
  border: 1px solid var(--for-border)
}


.form__option {
  padding: 9px 12px;
}


.form__select-custom.isActive .selectCustom-options {
  display: block;
}


.selectCustom-option {
  position: relative;
  padding: 0.8rem 0.8rem 0.8rem 12px;
}


.selectCustom-option.isHover, .selectCustom-option:hover {
  background-color: var(--steel-gray);
  color: var(--text_primary);
  cursor: default;
}

.selectCustom-option:not(:last-of-type)::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}

.selectCustom-option.isActive::before {
  content: "✓";
  position: absolute;
  right: 15px;
}`,
}
