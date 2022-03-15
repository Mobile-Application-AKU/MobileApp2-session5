import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userExtend'
})
export class UserExtendPipe implements PipeTransform {

  // we set the type of the variable 'value' to any, and we add the arg.
  transform(value: any, arg): unknown {
    // creating the variables that we will need in this function.
    let newValue: any;
    let currentTime = new Date();

    // if the arg is 'firstname' we return the firstname of the value.
    if (arg == "firstname") {
      // we set the 'newValue' to the firstname of the value.
      newValue = value.name ? value.name.split(' ')[0] : '';
    }
    
    // if the arg is 'lastname' we return the lastname of the value.
    else if (arg == "lastname") {
      // we set the 'newValue' to the lastname of the value.
      newValue = value.name ? value.name.split(' ').splice(-1) : '';
    }
    
    // if the arg is 'age' we return the age of the value.
    else if (arg == "age") {
      // we set the 'newValue' to the age of the value.
      newValue = value.birthYear ? currentTime.getFullYear() - value.birthYear : '';
    }

    // finally we return the 'newValue'.
    return newValue;
  }

}
