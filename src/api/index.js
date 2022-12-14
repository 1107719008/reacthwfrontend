import axios from "axios"

const URL = "http://127.0.0.1:5000/api/v1"


export const getInfoById = async ({ queryKey }) => {
  const [infoId] = queryKey;
  let data = await axios.get(`${URL}/infos/id/${infoId}`);
  return data.data;
}

export const getInfos = async ({ queryKey }) => {
  const [url] = queryKey;
  let data;
  if (url === "")
    data = await axios.get(`${URL}/infos/all`);
  else
    data = await axios.get(`${URL}/infos/${url}`);

  return data;
}


export const getProductById = async ({ queryKey }) => {
  const [productId] = queryKey;
  let data = await axios.get(`${URL}/products/id/${productId}`);
  return data.data;
}

export const getProducts = async ({ queryKey }) => {
  const [url] = queryKey;
  let data;
  if (url === "")
    data = await axios.get(`${URL}/products/all`);
  else
    data = await axios.get(`${URL}/products/${url}`);

  return data;
}
export const getUser = async ({ queryKey }) => {
  const [urlUser] = queryKey;
  let data;
  if (urlUser === "")
    data = await axios.get(`${URL}/users/all`);
  else
    // emial
    data = await axios.get(`${URL}/users/${urlUser}`);
    
  return data;
}

export const getUserById = async ({ queryKey }) => {
  const [userId] = queryKey;
  let data = await axios.get(`${URL}/users/id/${userId}`);
  return data.data;
}

