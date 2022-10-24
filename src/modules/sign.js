import {avatarController} from "./avatarController";
import {API_URL} from "./const";
import {postData} from "./postData";
import {createCard} from "./createCard";
import {auth} from "./auth";


export const signInController = (callback) => {
  const form = document.querySelector('.form_sign-in');

  form.addEventListener('submit', async e => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    const dataResponse = await postData(`${API_URL}/api/service/signin`, data);

    if (dataResponse.errors) {
      console.log(dataResponse.errors)// todo errors
      return;
    }

    callback(e);
    auth(dataResponse);
  });
};

export const signUpController = (callback) => {
  const form = document.querySelector('.form_sign-up');


  const crp = avatarController({
    inputFile: '.avatar__input',
    uploadResult: '.avatar__result',
  });

  form.addEventListener('submit', async e => {
    e.preventDefault();

    if (form.password[0].value !== form.password[1].value) {
      console.log('Пароли не совпадают')// todo error
      return;
    }

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    data.avatar = await crp.result({
      type: 'base64',
      size: 'viewport',
    });

    const dataResponse = await postData(`${API_URL}/api/service/signup`, data);
    if (dataResponse.errors) {
      console.log(dataResponse.errors)// todo errors
      return;
    }
    const servicesList = document.querySelector('.services__list');
    servicesList.append(createCard(dataResponse));

    auth(dataResponse);
    form.reset();
    crp.hideAvatar();
    callback(e);
  })
}

