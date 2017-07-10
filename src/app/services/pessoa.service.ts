import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';

import { Pessoa } from '../models/pessoa.model';

@Injectable()
export class PessoaService {

  private pessoasUrl: string = 'http://praiadacosta.local/public/api/pessoas';
  private headers: Headers = new Headers({ 'Content-Type': 'application/json, Access-Control-Allow-Origin:*' });

  constructor(
    private http: Http
  ) { }

  private handleError(err: any): Promise<any> {
    console.log('Error: ', err);
    return Promise.reject(err.message || err);
  }

  findAll(): Promise<Pessoa[]> {
    return this.http.get(this.pessoasUrl)
      .toPromise()
      .then(response => {
        // console.log( response.json() );
        return response.json() as Pessoa[];
      })
      .catch(this.handleError);
  }

  find(id: number): Promise<Pessoa> {
    const url = `${this.pessoasUrl}/${id}`; // pessoas/:id
    return this.http.get(url)
      .toPromise()
      .then(response => {
        //console.log('pessoa.service.ts:', response.json() );
        return response.json() as Pessoa
      })
      .catch(this.handleError);
  }

  delete(pessoa: Pessoa): Promise<Pessoa> {
    // servidor não funcionava com delete, alterado para 
    // get api/pessoas/{nome}/delete
    const url = `${this.pessoasUrl}/${pessoa.id}/delete`;
    return this.http.get(url, { headers: this.headers })
      .toPromise()
      .then((response) => {
        console.log('pessoa.service.ts:', response.json());
        return pessoa as Pessoa;
      })
      .catch(this.handleError);
  }

  update(pessoa: Pessoa): Promise<Pessoa> {
    const url = `${this.pessoasUrl}/${pessoa.id}`; // pessoas/:id
    return this.http
      .put(url, JSON.stringify(pessoa), { headers: this.headers })
      .toPromise()
      .then(() => pessoa as Pessoa)
      .catch(this.handleError);
  }

  create(pessoa: Pessoa): Promise<Pessoa> {
    return this.http
      .post(this.pessoasUrl, JSON.stringify(pessoa), { headers: this.headers })
      .toPromise()
      .then((response: Response) => response.json().data as Pessoa)
      .catch(this.handleError);
  }

}
