export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};

export type IGenericErrorResponse = {
  success: boolean;
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};
