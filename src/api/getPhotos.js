import apiConfig from "./config";

const getPhotos = ({ value }) =>
  apiConfig({
    url: "/photos/random",
    params: { count: 8, query: value },
  });
export default getPhotos;
