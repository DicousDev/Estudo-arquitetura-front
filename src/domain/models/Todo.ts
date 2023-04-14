export default class Todo {

  descricao: String;
  finalizada: Boolean;

  constructor(descricao: String, finalizada: Boolean) {
    this.descricao = descricao;
    this.finalizada = finalizada;
  }

  finalizar() {
    this.finalizada = true;
    return this;
  }
}