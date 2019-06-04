import {Directive, Input} from '@angular/core';
import {NG_VALIDATORS, Validator, AbstractControl} from "@angular/forms";

@Directive({
  selector: '[appSameValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: SameValidatorDirective, multi: true}]
})
export class SameValidatorDirective implements Validator {
  @Input('appSameValidator') comparedTo: string;

  validate(control: AbstractControl): {[key: string]: any} | null {
    if (this.comparedTo){
      if(this.comparedTo == control.value)
        return null;
      else
        return {'notsame': true};
    }
    else
      return null;
  }
}
