import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { BooklistComponent } from './booklist/booklist.component';
import { ModalComponent } from './modal/modal.component';
import { booksReducer } from './state/reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(
      {state: booksReducer},
      {
        runtimeChecks: {
          strictActionSerializability: true,
          strictStateSerializability: true,
          strictActionWithinNgZone: true,
        },
      }
    ),
    StoreDevtoolsModule.instrument({ maxAge: 100 }),
    ModalComponent,
    BooklistComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
