import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Contato, TipoContato } from '../models/contato';

@Component({
  selector: 'app-adiciona-contato',
  imports: [ReactiveFormsModule, DatePipe],
  templateUrl: './adiciona-contato.html',
  styleUrl: './adiciona-contato.css',
})
export class AdicionaContato {
  contatos: Contato[] = [];
  tipos = Object.values(TipoContato);

  form = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    telefone: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    aniversario: new FormControl('', Validators.required),
    tipo: new FormControl(TipoContato.Amigo, Validators.required),
  });

  adicionarContato() {
    if (this.form.invalid) {
      return;
    }

    let valores = this.form.value;

    let data = new Date(valores.aniversario + 'T00:00:00');

    let contato = new Contato(valores.nome!, valores.telefone!, valores.email!, data, valores.tipo!);
    this.contatos.push(contato);

    this.form.reset({ tipo: TipoContato.Amigo });
  }
}