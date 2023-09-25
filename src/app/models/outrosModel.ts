export interface Outros {
  tipo: String;
  subtipo: String;
  preco: String;
}
export class OutrosModel {
  patamares: Array<Outros> = require("../../assets/degraus.json");

  getPrecoOutros(tipo: String, subtipo: String){
    const value = this.patamares.filter((element) => element.tipo == tipo && element.subtipo == subtipo);
    return Number(value[0]?.preco);
  }

}
