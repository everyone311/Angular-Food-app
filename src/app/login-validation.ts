import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';

export function asyncValidator(
  control: AbstractControl
): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
  return new Promise((resolve, reject) => {
    // Perform some asynchronous validation
    setTimeout(() => {
      if (control.value === 'foo') {
        resolve({ asyncError: true });
      } else {
        resolve(null);
      }
    }, 1000);
  });
}
