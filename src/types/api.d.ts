declare namespace API {
  interface SuccessResponse<T> {
    data: T;
    statusCode: number;
    error?: never;
  }

  interface ErrorResponse {
    data: null;
    statusCode: number;
    error: APIError;
  }

  export interface ErrorResponseType {
    response: SuccessResponse;
  }

  type Response<T> = SuccessResponse<T> | ErrorResponse;

  interface APIError {
    message: string;
  }
}
