import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Produto } from '../../models/Produtos';
import { ProdutoService } from '../../service/produto-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  imports: [FormsModule],
  selector: 'app-cadastro-produto',
  styleUrl: './cadastro-produto.css',
  templateUrl: './cadastro-produto.html',
})
export class CadastroProduto {

    idsetor: = 0
    produto:  = ''
    descricao_produto:  = ''
    valor_unitario:  = 0
    unidade:  = ''
    estoque: = 0
 
}

