const catchError = (error) => {
  if (error) {
    if (error.response) return error.response.data.errors[0];
    return error.message;
  }
};

export default catchError;
