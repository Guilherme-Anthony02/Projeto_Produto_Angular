import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../models/Produtos';
@Service({
    providenIn: 'root'
})
export class ProdutoService {//DECLARAÇÃO CONSTRUTOR
  constructor(private http: HttpClient) { }

  //ADICIONAR NA API
  adicionarProduto(produto: Produto): Observable<Produto> {
    //const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta`

    const urlApi = `http://127.0.0.1:8000/produto/`

    return this.http.post<Produto>(urlApi, produto)
  }

  //LISTAR ATLETAS NA API
  listarProduto(): Observable<Produto[]> {
    //const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta`
    const urlApi = `http://127.0.0.1:8000/produto/`

    return this.http.get<Produto[]>(urlApi)
  }

  //LISTAR ATLETA
  listarProduto(idProduto: number):Observable<Produto>{
    //const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta/${idAtleta}`

    const urlApi = `http://127.0.0.1:8000/produto/${idProduto}`

    return this.http.get<Produto>(urlApi)
  }

  //EXCLUIR NA API
  excluirProduto(produto: Produto): Observable<Produto> {
    //const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta/${atleta.id}`

    const urlApi = `http://127.0.0.1:8000/produto/${produto.id}`

    return this.http.delete<Produto>(urlApi)
  }

  //ALTERAR NA API
  alterarProduto(produto: Produto):Observable<Produto>{
    //const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta/${atleta.id}`

    const urlApi = `http://127.0.0.1:8000/produto/${produto.id}`

    return this.http.put<Produto>(urlApi, produto)
  }
}
