import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss'],
})
export class FoodListComponent implements OnInit {
  //
  comidas = foods;
  kcal_totals = 0;
  lista_lateral_comidas = [];
  creacio_actiu = false;
  plat_buscar;

  constructor() {}

  ngOnInit(): void {}

  afegir(plat): void {
    const { ...tmp_plat } = plat; // desestructurar

    if (this.exiteix_plat(tmp_plat) == -1) {
      // no existeix
      this.lista_lateral_comidas.push(tmp_plat); // l'afegim
    } else {
      this.incrementar_quantitat(tmp_plat);
    }

    this.pintar_kcal_totals();
  }

  exiteix_plat(plat): number {
    for (let i = 0; i < this.lista_lateral_comidas.length; i++) {
      const element = this.lista_lateral_comidas[i];

      if (element.name === plat.name) {
        return i;
      }
    }
    return -1;
  }

  incrementar_quantitat(plat): void {
    //
    for (const element of this.lista_lateral_comidas) {
      if (element.name === plat.name) {
        element.quantity++;
        break;
      }
    }
  }

  pintar_kcal_totals(): void {
    //
    const numProductes = this.lista_lateral_comidas.length;
    this.kcal_totals = 0;

    for (let i = 0; i < numProductes; i++) {
      this.kcal_totals +=
        this.lista_lateral_comidas[i].quantity *
        this.lista_lateral_comidas[i].calories;
    }
  }

  handler_add(menjar, kcal, imatge): void {
    this.comidas.push({
      name: menjar,
      calories: kcal,
      image: imatge,
      quantity: 1,
    });
  }
}
