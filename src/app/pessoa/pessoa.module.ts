import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PessoaRoutingModule } from './pessoa.routing.module';
import { CrudComponent } from './crud/crud.component';
import { CrudDetalheComponent } from './crud-detalhe/crud-detalhe.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PessoaRoutingModule
  ],
  declarations: [
    CrudComponent,
    CrudDetalheComponent
  ],
  exports: [
    CrudComponent,
    CrudDetalheComponent    
  ]
})
export class PessoaModule { }
