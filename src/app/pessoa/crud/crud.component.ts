import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Pessoa } from '../../models/pessoa.model';
import { PessoaService } from '../../services/pessoa.service';
import { DialogService } from '../../services/dialog.service';

@Component({
    selector: 'app-crud',
    templateUrl: './crud.component.html',
    styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
    pessoas: Pessoa[] = [];
    mensagem: {};
    classesCss: {};
    private currentTimeout: any;

    constructor(
        private pessoaService: PessoaService,
        private dialogService: DialogService,
        private router: Router
    ) { }

    ngOnInit() {
        this.pessoaService.findAll()
            .then((pessoas: Pessoa[]) => {
                this.pessoas = pessoas;
                // console.log('crud.component', pessoas);
            }).catch(err => {
                this.pessoas = [];
                console.log(err);
                this.mostrarMensagem({
                    tipo: 'danger',
                    texto: 'Ocorreu um erro ao buscar a lista de pessoas!'
                });
            });
    }
    private mostrarMensagem(mensagem: { tipo: string, texto: string }): void {
        this.mensagem = mensagem;
        this.montarClasses(mensagem.tipo);
        if (mensagem.tipo != 'danger') {

            if (this.currentTimeout) {
                clearTimeout(this.currentTimeout);
            }

            this.currentTimeout = setTimeout(() => {
                this.mensagem = undefined;
            }, 3000);
        }
    }
    private montarClasses(tipo: string): void {
        this.classesCss = {
            'alert': true
        };
        this.classesCss['alert-' + tipo] = true; // alert-success
    }

    onUpdate(pessoa: Pessoa): void {
        let link = ['pessoa/detalhe', pessoa.id];
        this.router.navigate(link);
    }

    onDelete(pessoa: Pessoa): void {
        this.dialogService.confirm('Deseja deletar ' + pessoa.nome + '?')
            .then((canDelete: boolean) => {
                if (canDelete) {
                    this.pessoaService
                        .delete(pessoa)
                        .then(() => {
                            this.pessoas = this.pessoas.filter((p: Pessoa) => p.id != pessoa.id);
                            this.mostrarMensagem({
                                tipo: 'success',
                                texto: 'Pessoa deletada!'
                            });
                        }).catch(err => {
                            console.log(err);
                            this.mostrarMensagem({
                                tipo: 'danger',
                                texto: 'Ocorreu um erro ao deletar pessoa!', 
                            });
                        });
                }
            });
    }
}
