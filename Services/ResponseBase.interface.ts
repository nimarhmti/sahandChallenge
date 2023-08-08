export interface ResponseBase<T> {
  message: string;
  persons: T[];
}
