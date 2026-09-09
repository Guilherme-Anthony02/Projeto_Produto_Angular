import { Service } from '@angular/core';

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
  listarProduto(): Observable<Pesso[]> {
    //const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta`
    const urlApi = `http://127.0.0.1:8000/produto/`

    return this.http.get<Pessoa[]>(urlApi)
  }

  //LISTAR ATLETA
  listarAtleta(idAtleta: number):Observable<Pessoa>{
    //const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta/${idAtleta}`

    const urlApi = `http://127.0.0.1:8000/produto/${idProduto}`

    return this.http.get<Pessoa>(urlApi)
  }

  //EXCLUIR NA API
  excluirProduto(atleta: Pessoa): Observable<Pessoa> {
    //const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta/${atleta.id}`

    const urlApi = `http://127.0.0.1:8000/produto/${produto.id}`

    return this.http.delete<Pessoa>(urlApi)
  }

  //ALTERAR NA API
  alterarAtleta(atleta: Pessoa):Observable<Pessoa>{
    //const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta/${atleta.id}`

    const urlApi = `http://127.0.0.1:8000/pessoa/${atleta.id}`

    return this.http.put<Pessoa>(urlApi, atleta)
  }
}
