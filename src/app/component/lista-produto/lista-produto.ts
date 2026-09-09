import { Component, signal} from '@angular/core'
import { ProdutoService } from "../../service/produto-service";
import { Produto } from "../../models/Produtos";
import { Router } from "../../../../node_modules/@angular/router/types/_router_module-chunk";

@Component({
  selector: 'app-atleta-lista-component',
  imports: [],
  templateUrl: './atleta-lista-component.html',
  styleUrl: './atleta-lista-component.css',
})
export class ListaProduto {

  listaProdutos = signal<Produto[]>([]);

  constructor(
    private router: Router,
    private http: ProdutoService,
  ) {}

  ngOnInit() {
    this.listarProduto();
  }

  listarProduto() {
    this.http.listarProduto().subscribe({
      next: (dados) => {
        this.listaProdutos.set([...dados].sort((a, b) => a.nome.localeCompare(b.nome)));
      },
      error: (msgErro) => {
        console.log('Erro ao cadastrar o produto ', msgErro);
      },
    });
  }

  excluirProduto(produto: Produto) {
    if (confirm(`Deseja excluir ${Produto.nome} da competição? `)) {
      this.http.excluirProduto(produto).subscribe({
        next: (dados) => {
          this.listaProduto.update((elem) => elem.filter((a) => a.id !== produto.id));

          console.log('produto excluído com Sucesso ', dados);
        },
        error: (msgErro) => {
          console.log('Erro ao Excluir  o produto ', msgErro);
        },
      });
    }
    this.ngOnInit();
  }

  buscarProduto(idProduto: Produto) {
    this.router.navigate(['/cadastroproduto', idProduto]);
  }

  MostrarIdade(data_nascimento: string): number {
    {
      const nascimento = new Date(data_nascimento + 'T00:00:00');
      const hoje = new Date();

      let idade = hoje.getFullYear() - nascimento.getFullYear();

      const mes = hoje.getMonth() - nascimento.getMonth();

      if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
        idade--;
      }
      return idade;
    }
  }

  
}

