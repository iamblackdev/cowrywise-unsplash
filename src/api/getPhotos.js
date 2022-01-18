import apiConfig from "./config";

// use for getting random images
// the query limit selection to photos matching a search term.
// see https://unsplash.com/documentation#get-a-random-photo from more information

const getPhotos = ({ value }) =>
  apiConfig({
    url: "/photos/random",
    params: { count: 8, query: value },
  });
export default getPhotos;
