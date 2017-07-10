import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';


import { Pessoa } from '../../models/pessoa.model';
import { PessoaService } from '../../services/pessoa.service';

@Component({
  selector: 'app-crud-detalhe',
  templateUrl: './crud-detalhe.component.html',
  styleUrls: ['./crud-detalhe.component.css']
})
export class CrudDetalheComponent implements OnInit {
  pessoa: Pessoa;
  private isNew: boolean = true;

  constructor(
    private pessoaService: PessoaService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.pessoa = new Pessoa(0, '', '', '');
    this.route.params.forEach((params: Params) => {
      let id: number = +params['id'];
      if (id) {
        this.isNew = false;
        this.pessoaService.find(id)
          .then((pessoa: Pessoa) => {
            this.pessoa = pessoa;
          });
      }
    });
  }

  getFormGroupClass(isValid: boolean, isPristine: boolean): {} {
    return {
      'form-group': true,
      'has-danger': !isValid && !isPristine,
      'has-success': isValid && !isPristine
    };
  }

  getFormControlClass(isValid: boolean, isPristine: boolean): {} {
    return {
      'form-control': true,
      'form-control-danger': !isValid && !isPristine,
      'form-control-success': isValid && !isPristine
    };
  }

  goBack(): void {
    this.location.back();
  }

  onSubmit(): void {
    let promise: Promise<Pessoa>;
    if (this.isNew) {
      promise = this.pessoaService.create(this.pessoa);
    } else {
      console.log('alterar pessoa', this.pessoa );
      promise = this.pessoaService.update(this.pessoa);
    }
    promise.then(pessoa => this.goBack());
  }

}
