import apiConfig from "./config";

const searchImage = ({ value }) =>
  apiConfig({
    url: "search/photos",
    params: {
      query: value,
      per_page: 8,
    },
  });
export default searchImage;

// i didn't use the search endpoint beacuse,
// it dose not returns the image location and it will require me to make extra calls
// for each image to get there location,
// which is not necessary and will be too many call for the backend.
