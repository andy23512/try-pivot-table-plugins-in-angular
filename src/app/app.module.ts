import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactSortPivottableWrapperComponent } from './react-sort-pivottable-wrapper/react-sort-pivottable-wrapper.component';

@NgModule({
  declarations: [AppComponent, ReactSortPivottableWrapperComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
