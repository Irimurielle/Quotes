import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pastTime'
})
export class PastTimePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
