import apiConfig from "./config";

// api function for getting single image details using the ID
// when using search the reponse dose not return  the image location
// so you can use an image ID to fetch the image details with also includes the location
const getImagetDetails = ({ id }) =>
  apiConfig({
    url: `photos/${id}`,
  });
export default getImagetDetails;
