import axios from "axios";
import { baseURL, client_id } from "../constants";
import catchError from "../utils/catchError";

// app api client configuration (axios)
const apiConfig = async ({ url, method, data, params }) => {
  try {
    const response = await axios.request({
      baseURL,
      url,
      method,
      data,
      params: {
        client_id,
        ...params,
      },
    });

    return { data: response.data, status: response.status };
  } catch (err) {
    const errorMessage = catchError(err);
    return { error: errorMessage };
  }
};

export default apiConfig;
