import { createReducer, on } from '@ngrx/store';
import { addBook, removeBook } from './actions';
import { BookState } from './selectors';

export const initialState: BookState = {
  books: [
    {
      title: 'Harry Potter und der Stein der Weisen',
      author: 'Joanne K. Rowling',
      year: 1997,
    },
    {
      title: 'Der Herr der Ringe',
      author: 'J. R. R. Tolkien',
      year: 1954,
    },
    {
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      year: 1878,
    },
    {
      title: 'Über Menschen',
      author: 'Juli Zeh',
      year: 2022,
    },
    {
      title: 'Über Menschen',
      author: 'Juli Zeh',
      year: 2022,
    },
    {
      title: 'Mein Leben in deinem',
      author: 'Jojo Moyes',
      year: 2023,
    },
    {
      title: 'Eine Frage der Chemie',
      author: 'Bonnie Garmus',
      year: 2022,
    },
  ],
};

export const booksReducer = createReducer(
  initialState,
  on(addBook, (state, { book }) => ({ books: [...state.books, book] })),
  on(removeBook, (state, { book }) => ({
    books: [...state.books.filter((_book) => _book.title !== book.title)],
  }))
);
