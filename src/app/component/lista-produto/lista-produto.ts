import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';

import { Produto } from '../../models/Produtos';
import { ProdutoService } from '../../service/produto-service';

@Component({
  selector: 'app-lista-produto',
  imports: [],
  templateUrl: './lista-produto.html',
  styleUrl: './lista-produto.css',
})
export class ListaProduto {
  listaProdutos = signal<Produto[]>([]);

  constructor(
    private router: Router,
    private produtoService: ProdutoService
  ) {}

  ngOnInit() {
    this.listarProdutos();
  }

  listarProdutos() {
    this.produtoService.listarProdutos().subscribe({
      next: (dados) => {
        this.listaProdutos.set(
          [...dados].sort((a, b) => (a.produto || '').localeCompare(b.produto || ''))
        );
      },
      error: (msgErro) => {
        console.log('Erro ao listar os produtos ', msgErro);
      },
    });
  }

  excluirProduto(produto: Produto) {
    if (confirm(`Deseja excluir ${produto.descricao_produto} da lista?`)) {
      this.produtoService.excluirProduto(produto).subscribe({
        next: (dados) => {
          this.listaProdutos.update((elem) =>
            elem.filter((item) => item.idproduto !== produto.idproduto)
          );

          console.log('Produto excluído com sucesso ', dados);
        },
        error: (msgErro) => {
          console.log('Erro ao excluir o produto ', msgErro);
        },
      });
    }
  }

  buscarProduto(produto: Produto) {
    this.router.navigate(['/cadastroproduto', produto.idproduto]);
  }

  voltarParaHome() {
    this.router.navigate(['/home']);
  }
}

