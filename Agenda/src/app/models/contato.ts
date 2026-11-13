export enum TipoContato {
  Amigo = 'Amigo(a)',
  Familia = 'Família',
  Trabalho = 'Trabalho',
  Outro = 'Outro'
}

export class Contato {
  private nome: string;
  private telefone: string;
  private email: string;
  private aniversario: Date;
  private tipo: TipoContato;

  constructor(nome: string, telefone: string, email: string, aniversario: Date, tipo: TipoContato) {
    this.nome = nome;
    this.telefone = telefone;
    this.email = email;
    this.aniversario = aniversario;
    this.tipo = tipo;
  }

  getNome() {
    return this.nome;
  }
  setNome(nome: string) {
    this.nome = nome;
  }

  getTelefone() {
    return this.telefone;
  }
  setTelefone(telefone: string) {
    this.telefone = telefone;
  }

  getEmail() {
    return this.email;
  }
  setEmail(email: string) {
    this.email = email;
  }

  getAniversario() {
    return this.aniversario;
  }
  setAniversario(aniversario: Date) {
    this.aniversario = aniversario;
  }

  getTipo() {
    return this.tipo;
  }
  setTipo(tipo: TipoContato) {
    this.tipo = tipo;
  }
}