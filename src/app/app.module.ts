import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

import { DialogService } from './services/dialog.service';
import { PessoaService } from './services/pessoa.service';

import { PessoaModule } from './pessoa/pessoa.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    PessoaModule
  ],
  providers: [
    PessoaService,
    DialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
