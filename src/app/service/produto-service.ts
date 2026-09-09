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
    const urlApi = 'http://127.0.0.1:8000/produto/';

    return this.http.post<Produto>(urlApi, produto);
  }

  listarProdutos(): Observable<Produto[]> {
    const urlApi = 'http://127.0.0.1:8000/produto/';

    return this.http.get<Produto[]>(urlApi);
  }

  listarProduto(idProduto: number): Observable<Produto> {
    const urlApi = `http://127.0.0.1:8000/produto/${idProduto}`;

    return this.http.get<Produto>(urlApi);
  }

  excluirProduto(produto: Produto): Observable<Produto> {
    const urlApi = `http://127.0.0.1:8000/produto/${produto.idproduto}`;

    return this.http.delete<Produto>(urlApi);
  }

  exluirProduto(produto: Produto): Observable<Produto> {
    return this.excluirProduto(produto);
  }

  alterarProduto(produto: Produto): Observable<Produto> {
    const urlApi = `http://127.0.0.1:8000/produto/${produto.idproduto}`;

    return this.http.put<Produto>(urlApi, produto);
  }
}
