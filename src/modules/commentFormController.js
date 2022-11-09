import {postData} from "./postData";
import {API_URL} from "./const";


export const commentFormController = (form) => {
  form.addEventListener('submit', e => {
    e.preventDefault();


    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    postData(`${API_URL}/api/service/comment/${form.dataset.id}`, data);

    form.reset();
  })
};
