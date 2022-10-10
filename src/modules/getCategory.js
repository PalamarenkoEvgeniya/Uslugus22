import {getData} from "./getData";
import {API_URL} from "./const";
import {store} from "./store";

export const getCategory = async () => {
  store.category = await getData(`${API_URL}/api/category`);
}
