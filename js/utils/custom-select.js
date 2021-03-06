const form = document.querySelector('.form');
let currentSelect = '';
let optionChecked = "";
let optionHoveredIndex = -1;


form.addEventListener('click', (evt) => {

  if (evt.target.classList.contains('form__select-custom--trigger')) {
    currentSelect = evt.target.parentElement.parentElement;
    setSelectHandler(currentSelect);
  }
  if (evt.target.classList.contains('form__select-native')) {
    currentSelect = evt.target.parentElement;
    setSelectHandler(currentSelect);
  }

})

const setSelectHandler = (currentSelect) => {
  const elSelectNative = currentSelect.getElementsByClassName("form__select-native")[0];
  const elSelectCustom = currentSelect.getElementsByClassName("js-selectCustom")[0];
  const elSelectCustomBox = elSelectCustom.children[0];
  const elSelectCustomOpts = elSelectCustom.children[1];
  const customOptsList = Array.from(elSelectCustomOpts.children);
  const optionsCount = customOptsList.length;
  const defaultLabel = elSelectCustomBox.getAttribute("data-value");

  const isClosed = !elSelectCustom.classList.contains("isActive");

  if (isClosed) {
    openSelectCustom();
  } else {
    closeSelectCustom();
  }

  function openSelectCustom() {
    elSelectCustom.classList.add("isActive");

    elSelectCustom.setAttribute("aria-hidden", false);

    if (optionChecked) {
      const optionCheckedIndex = customOptsList.findIndex(
        (el) => el.getAttribute("data-value") === optionChecked
      );
      updateCustomSelectHovered(optionCheckedIndex);
    }

    document.addEventListener("click", watchClickOutside);
    document.addEventListener("keydown", supportKeyboardNavigation);
  }

  function closeSelectCustom() {
    elSelectCustom.classList.remove("isActive");

    elSelectCustom.setAttribute("aria-hidden", true);

    updateCustomSelectHovered(-1);

    document.removeEventListener("click", watchClickOutside);
    document.removeEventListener("keydown", supportKeyboardNavigation);
  }

  function updateCustomSelectHovered(newIndex) {
    const prevOption = elSelectCustomOpts.children[optionHoveredIndex];
    const option = elSelectCustomOpts.children[newIndex];

    if (prevOption) {
      prevOption.classList.remove("isHover");
    }
    if (option) {
      option.classList.add("isHover");
    }

    optionHoveredIndex = newIndex;
  }

  function updateCustomSelectChecked(value, text) {
    const prevValue = optionChecked;

    const elPrevOption = elSelectCustomOpts.querySelector(
      `[data-value="${prevValue}"`
    );
    const elOption = elSelectCustomOpts.querySelector(`[data-value="${value}"`);

    if (elPrevOption) {
      elPrevOption.classList.remove("isActive");
    }

    if (elOption) {
      elOption.classList.add("isActive");
    }

    elSelectCustomBox.textContent = text;
    optionChecked = value;
  }

  function watchClickOutside(evt) {
    const didClickedOutside = !elSelectCustom.contains(evt.target);
    if (didClickedOutside) {
      closeSelectCustom();
    }
  }

  function supportKeyboardNavigation(evt) {
    if (evt.keyCode === 40 && optionHoveredIndex < optionsCount - 1) {
      let index = optionHoveredIndex;
      evt.preventDefault(); // prevent page scrolling
      updateCustomSelectHovered(optionHoveredIndex + 1);
    }

    if (evt.keyCode === 38 && optionHoveredIndex > 0) {
      evt.preventDefault(); // prevent page scrolling
      updateCustomSelectHovered(optionHoveredIndex - 1);
    }

    if (evt.keyCode === 13 || evt.keyCode === 32) {
      evt.preventDefault();

      const option = elSelectCustomOpts.children[optionHoveredIndex];
      const value = option && option.getAttribute("data-value");

      if (value) {
        elSelectNative.value = value;
        updateCustomSelectChecked(value, option.textContent);
      }
      closeSelectCustom();
    }

    if (evt.keyCode === 27) {
      closeSelectCustom();
    }
  }

  elSelectNative.addEventListener("change", (evt) => {
    const value = evt.target.value;
    const elRespectiveCustomOption = elSelectCustomOpts.querySelectorAll(`[data-value="${value}"]`)[0];
    updateCustomSelectChecked(value, elRespectiveCustomOption.textContent);
  });

  customOptsList.forEach(function (elOption, index) {
    elOption.addEventListener("click", (e) => {
      const value = e.target.getAttribute("data-value");

      elSelectNative.value = value;
      updateCustomSelectChecked(value, e.target.textContent);
      closeSelectCustom();
    });

    elOption.addEventListener("mouseenter", (e) => {
      updateCustomSelectHovered(index);
    });
  });
}
