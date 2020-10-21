export interface Response<T = any> {
  type: 'SUCCESS' | 'ERROR';
  status: number;
  text: string;
  data: T;
}

export interface BasicValue {
  id: string | number;
  name: string;
}

export interface Dictionary<T = any> {
  [key: string]: T;
}

export interface ListData<T = any> {
  currentPage: number;
  data: T[];
  pageSize: number;
  totalCount: number;
  totalPage: number;
}
