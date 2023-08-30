class ApiError extends Error {
  constructor(
    public success: boolean,
    public statusCode: number,
    message: string,
    stack = ""
  ) {
    super(message);
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default ApiError;
