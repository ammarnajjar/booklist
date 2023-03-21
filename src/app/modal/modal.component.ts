import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Store } from '@ngrx/store';
import { Book } from '../models/book.model';
import { addBook } from '../state/actions';
import { AppState } from '../state/selectors';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  constructor(
    private readonly store: Store<AppState>,
    public dialogRef: MatDialogRef<ModalComponent>,
    private formBuilder: FormBuilder
  ) {}

  form = this.formBuilder.group({
    title: new FormControl<string | null>(null, Validators.required),
    author: new FormControl<string | null>(null, Validators.required),
    year: new FormControl<number | null>(null, Validators.required),
  });

  onSubmit(): void {
    const book: Book = this.form.value as Book;
    this.store.dispatch(addBook({ book }));
    this.dialogRef.close();
  }
}
