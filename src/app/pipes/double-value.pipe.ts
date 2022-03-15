import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doubleValue'
})
export class DoubleValuePipe implements PipeTransform {

  // we set the type of the variable 'value' and the 'transform' method to number because we want to return a number.
  transform(value: number): number {
    // we return the value multiplied by 2.
    return value * 2;
  }

}
