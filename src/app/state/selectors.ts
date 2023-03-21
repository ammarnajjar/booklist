import { Book } from "../models/book.model";

export interface AppState {
  state: BookState
}

export interface BookState {
  books: Book[];
}

export const selectBooks = ({state}: AppState) => state.books
