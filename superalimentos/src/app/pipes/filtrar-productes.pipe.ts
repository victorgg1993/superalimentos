import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrarProductes',
})
export class FiltrarProductesPipe implements PipeTransform {
  //
  transform(arrayProductes: any[], parametre: string): any[] {
    //
    return arrayProductes.filter((plat) =>
      plat.name.toLowerCase().includes(parametre.toLowerCase()) ? plat : 0
    );
  }
}
