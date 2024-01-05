export const SuccessResponse = (
  message: string,
  data: object | string | undefined
) => {
  return {
    statusCode: 1,
    message,
    data,
  };
};

export const ErrorResponse = (
  message: string
) => {
  return {
    statusCode: 0,
    message,
  };
};

export const UnauthorizedErrorResponse = (
  message: string,
  data: object | string | undefined
) => {
  return {
    statusCode: 2,
    message,
  };
};
