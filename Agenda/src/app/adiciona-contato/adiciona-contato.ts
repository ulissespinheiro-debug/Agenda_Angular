import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Contato, TipoContato } from '../models/contato';

@Component({
  selector: 'app-adiciona-contato',
  imports: [FormsModule, DatePipe],
  templateUrl: './adiciona-contato.html',
  styleUrl: './adiciona-contato.css',
})
export class AdicionaContato {
  contatos: Contato[] = [];
  tipos = Object.values(TipoContato);

  nome = '';
  telefone = '';
  email = '';
  aniversario = '';
  tipo = TipoContato.Amigo;

  adicionarContato() {
    if (this.nome == '' || this.telefone == '' || this.email == '' || this.aniversario == '') {
      alert('Preencha todos os campos!');
      return;
    }

    // coloquei o T00:00 pq sem isso a data ficava um dia antes
    let data = new Date(this.aniversario + 'T00:00:00');

    let contato = new Contato(this.nome, this.telefone, this.email, data, this.tipo);
    this.contatos.push(contato);

    // limpa o form
    this.nome = '';
    this.telefone = '';
    this.email = '';
    this.aniversario = '';
    this.tipo = TipoContato.Amigo;
  }
}
