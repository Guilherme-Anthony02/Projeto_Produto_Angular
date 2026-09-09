import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Produto } from '../models/Produtos';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  constructor(private http: HttpClient) {}

  adicionarProduto(produto: Produto): Observable<Produto> {
    const urlApi = 'http://127.0.0.1:8000/produtos/';

    return this.http.post<Produto>(urlApi, produto);
  }

  listarProdutos(): Observable<Produto[]> {
    const urlApi = 'http://127.0.0.1:8000/produtos/';

    return this.http.get<Produto[]>(urlApi);
  }

  listarProduto(idproduto: number): Observable<Produto> {
    const urlApi = `http://127.0.0.1:8000/produtos/${idproduto}`;

    return this.http.get<Produto>(urlApi);
  }

  excluirProduto(produtos: Produto): Observable<Produto> {
    const urlApi = `http://127.0.0.1:8000/produtos/${produtos.idproduto}`;

    return this.http.delete<Produto>(urlApi);
  }


  alterarProduto(produtos: Produto): Observable<Produto> {
    const urlApi = `http://127.0.0.1:8000/produtos/${produtos.idproduto}`;

    return this.http.put<Produto>(urlApi, produtos);
  }
}
