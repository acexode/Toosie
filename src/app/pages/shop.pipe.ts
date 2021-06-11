import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shop'
})
export class ShopPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
