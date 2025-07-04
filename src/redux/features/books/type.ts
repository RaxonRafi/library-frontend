export interface IBooks{
  _id?:string;
  title: string;
  author: string;
  genre: string;
  isbn: string;
  description?: string;
  copies: number;
  available?: boolean;
}
export interface IBorrow{
  book?:string,
  quantity:number,
  dueDate:Date
}
