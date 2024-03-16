declare namespace API {
  interface Response<T = any> {
    data: T;
    statusCode: number;
    error?: Error;
  }

  interface Error {
    message: string;
  }
}
