import {createElement} from "./createElement";
import {API_URL} from "./const";
import {store} from "./store";

export const renderModal = (parent, data) => {
  parent.textContent = '';

  console.log(data);

  const body = createElement('div', {className: 'modal__body'}, parent);
  const container = createElement('div', {className: 'modal__container person'}, body);

  //service

  const service = createElement('div', {className: 'person__service service service_person'}, container);
  createElement('img', {
    className: 'service__avatar',
    src: `${API_URL}/${data.avatar}`,
    alt: `аватар ${data.name}`
  }, service);

  const servicePresent = createElement('div', {className: 'service__present'}, service);
  createElement('h3', {
    className: 'service__title',
    textContent: store.category.find(item => item.title === data.category).rus,
  }, servicePresent)

  createElement('p', {
    className: 'service__name',
    textContent: `${data.name} ${data.surname[0]}.`
  }, servicePresent);

  const serviceContacts = createElement('div', {
    className: 'service__contacts',
  }, service);




}
