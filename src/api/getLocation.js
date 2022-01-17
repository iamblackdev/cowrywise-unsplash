import apiConfig from "./config";

const getLocation = ({ id }) =>
  apiConfig({
    url: `photos/${id}`,
  });
export default getLocation;
