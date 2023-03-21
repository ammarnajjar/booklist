import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogModule,
  MatDialogRef
} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ModalComponent } from '../modal/modal.component';
import { Book } from '../models/book.model';
import { removeBook } from '../state/actions';
import { AppState, selectBooks } from '../state/selectors';

@Component({
  selector: 'app-booklist',
  standalone: true,
  imports: [
    CommonModule,
    ModalComponent,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule
  ],
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.scss'],
})
export class BooklistComponent {
  displayedColumns: string[] = ['title', 'author', 'year', 'delete'];
  dataSource$: Observable<Book[]>;

  dialogConfig = new MatDialogConfig();
  modalDialog: MatDialogRef<ModalComponent, any> | undefined;

  constructor(
    public matDialog: MatDialog,
    private readonly store: Store<AppState>
  ) {
    this.dataSource$ = this.store.select(selectBooks);
  }

  ngAfterViewInit(): void {
    document.onclick = (args: any): void => {
      if (args.target.tagName === 'BODY') {
        this.modalDialog?.close();
      }
    };
  }

  openModal() {
    this.dialogConfig.width = '300px';
    this.modalDialog = this.matDialog.open(ModalComponent, this.dialogConfig);
  }

  delete(book: Book){
    this.store.dispatch(removeBook({book}))
  }
}
