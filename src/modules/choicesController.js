import Choices from "choices.js";

export const choicesController = () => {
  const option = {
    searchEnabled: false,
    shouldSort: false,
    itemSelectText: '',
    allowHTML: false,
  };

  const selectCategory = document.querySelector('.form__select_category');

  selectCategory._choices = new Choices(selectCategory, {
    ...option, classNames: {
      containerOuter: 'choices form__select_category'
    }
  });

  const selectPrice = document.querySelector('.form__select_price');

  selectPrice._choices = new Choices(selectPrice, {
    ...option, classNames: {
      containerOuter: 'choices form__select_price'
    }
  });
}
