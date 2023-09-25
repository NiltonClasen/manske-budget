export interface Patamar {
  anel: String;
  tamanho: String;
  preco: String;
}
export class PatamarModel {
  patamares: Array<Patamar> = require("../../assets/degraus.json");

  getPrecoPatamar(anel: String, tamanho: String){
    const value = this.patamares.filter((element) => element.anel == anel && element.tamanho == tamanho);
    return Number(value[0]?.preco);
  }

}
