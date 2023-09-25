export interface Montagem {
  tipo: String;
  preco: String;
  tamanho: String;
}
export class MontagemModel {
  patamares: Array<Montagem> = require("../../assets/degraus.json");

  getPrecoMontagem(tipo: String, tamanho: String){
    const value = this.patamares.filter((element) => element.tipo == tipo && element.tamanho == tamanho);
    return Number(value[0]?.preco);
  }

}
