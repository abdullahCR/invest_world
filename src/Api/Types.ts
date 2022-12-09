export interface Pagination {
  pagesItemsTotal: number
  pagesItemsLimit: number
  pagesTotal: number
  pageNumber: number
}

export interface ListResponseTypes<T> {
  data: Array<T>
  message: string
  pagination: Pagination
  success: boolean
  duration?: number
}

export interface ResponseTypes<T> {
  data?: T
  message: string
  success: boolean
}

export type ResponseError = {
  success: boolean
  message: string
  data: Array<unknown>
}
