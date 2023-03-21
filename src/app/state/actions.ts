import { createAction, props } from '@ngrx/store';
import { Book } from '../models/book.model';

export const addBook = createAction('Add Book', props<{ book: Book }>());
export const removeBook = createAction('Remove Book', props<{ book: Book }>());
