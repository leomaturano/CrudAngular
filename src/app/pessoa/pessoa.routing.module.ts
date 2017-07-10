import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CrudComponent } from "./crud/crud.component";
import { CrudDetalheComponent } from "./crud-detalhe/crud-detalhe.component";

const PESSOA_ROUTES: Routes = [
    {
        path: 'pessoa',
        component: CrudComponent
    },
    {
        path: 'pessoa/detalhe',
        component: CrudDetalheComponent
    },
    {
        path: 'pessoa/detalhe/:id',
        component: CrudDetalheComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(PESSOA_ROUTES)
    ],
    exports: [
        RouterModule
    ]
})
export class PessoaRoutingModule { }
