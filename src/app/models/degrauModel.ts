export interface Degrau {
  id: String;
  tamanho: String;
  preco: String;
}

export class degrauModel {
  ids = [
    'Altemburg',
    'Duplos',
    'Hannover',
    'Millenium',
    'Retangular',
    'Roma',
    'Torino',
    'Torino C/Anel',
  ];
  tamanhoLista = [
    '0,50',
    '0,55',
    '0,60',
    '0,65',
    '0,70',
    '0,75',
    '0,80',
    '0,85',
    '0,90',
    '0,95',
    '1,00',
    '1,05',
    '1,10',
    '1,15',
    '1,20',
    '1,25',
    '1,30',
    '1,35',
    '1,40',
    '1,45',
    '1,50',
  ];
  degraus: Array<Degrau> = require("../../assets/degraus.json");
  constructor() {
  }

  getPrecoDegrau(id: String, tamanho: String){
    const value = this.degraus.filter((element) => element.id == id && element.tamanho == tamanho);
    return Number(value[0]?.preco);

  }

  getIds(){
    return this.ids;
  }

  getTamanhos(){
    return this.tamanhoLista;
  }

  getTudo(){
    return this.degraus;
  }

}
