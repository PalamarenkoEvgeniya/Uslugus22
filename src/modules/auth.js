import {store} from "./store";

export const auth = (data) => {
  store.user.name = data.name;
  store.user.surname = data.surname;
  store.user.category = data.category;
  store.user.id = data.id;
  store.user.avatar = data.avatar;

  console.log(store.user); //todo homework
}
