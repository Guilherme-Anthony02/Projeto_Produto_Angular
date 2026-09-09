import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Produto } from '../../models/Produtos';
import { ProdutoService } from '../../service/produto-service';

@Component({
  selector: 'app-cadastro-produto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cadastro-produto.html',
  styleUrl: './cadastro-produto.css',
})
export class CadastroProduto {
  produto = '';
  descricao_produto = '';
  valor_unitario = 0;
  unidade = '';
  estoque = 0;

  editar = false;
  idProduto = 0;

  constructor(
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.idProduto = Number(this.route.snapshot.paramMap.get('id'));

    if (this.idProduto > 0) {
      this.editar = true;
      this.carregaCampo(this.idProduto);
    }
  }

  exibeDados() {
    console.log(this.produto, this.descricao_produto, this.valor_unitario, this.unidade, this.estoque);
  }

  carregaCampo(idProduto: number) {
    this.produtoService.listarProduto(idProduto).subscribe({
      next: (objProduto) => {
        this.idProduto = objProduto.idproduto || idProduto;
        this.produto = objProduto.produto;
        this.descricao_produto = objProduto.descricao_produto;
        this.valor_unitario = objProduto.valor_unitario;
        this.unidade = objProduto.unidade;
        this.estoque = objProduto.estoque;

        this.cdr.detectChanges();
      },
      error: (msgErro) => {
        console.log('Erro ao listar o produto ', msgErro);
      },
    });
  }

  enviaDadosProduto() {
    const produtoParaSalvar = new Produto();

    produtoParaSalvar.produto = this.produto;
    produtoParaSalvar.descricao_produto = this.descricao_produto;
    produtoParaSalvar.valor_unitario = this.valor_unitario;
    produtoParaSalvar.unidade = this.unidade;
    produtoParaSalvar.estoque = this.estoque;

    if (this.editar) {
      produtoParaSalvar.idproduto = this.idProduto;

      this.produtoService.alterarProduto(produtoParaSalvar).subscribe({
        next: (resposta) => {
          console.log('Produto alterado com sucesso', resposta);
        },
        error: (msgErro) => {
          console.log('Erro ao alterar o produto ', msgErro);
        },
      });
    } else {
      this.produtoService.adicionarProduto(produtoParaSalvar).subscribe({
        next: (resposta) => {
          console.log('Produto cadastrado com sucesso', resposta);
        },
        error: (msgErro) => {
          console.log('Erro ao cadastrar o produto ', msgErro);
        },
      });
    }

    this.limparAtributos();
  }

  listaProduto(idProduto: number) {
    this.produtoService.listarProduto(idProduto).subscribe({
      next: (dados) => {
        console.table(dados);
      },
      error: (msgErro) => {
        console.log('Erro ao listar produtos ', msgErro);
      },
    });
  }

  limparAtributos() {
    this.produto = '';
    this.descricao_produto = '';
    this.valor_unitario = 0;
    this.unidade = '';
    this.estoque = 0;
    this.editar = false;
    this.idProduto = 0;
  }
}


