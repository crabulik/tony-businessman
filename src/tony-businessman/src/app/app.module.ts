import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { MdButtonModule, MdCardModule, MdTabsModule, MdSnackBarModule, MdFormFieldModule, MdInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SettingsComponent } from './settings.component';
import { PageNotFoundComponent } from './not-found.component';
import { ScriptGeneratorComponent } from './script-generator.component';


@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    ScriptGeneratorComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MdButtonModule, MdCardModule, MdTabsModule, MdSnackBarModule, MdFormFieldModule, MdInputModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
