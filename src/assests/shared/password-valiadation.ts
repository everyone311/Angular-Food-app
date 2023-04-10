import { AbstractControl,ValidatorFn } from "@angular/forms"
export class Validation{ 
    static match(controlName:string,checkControlName:string):ValidatorFn{
        return(controls:AbstractControl)=>{
            const control=controls.get(controlName);
            const checkControl=controls.get(checkControlName);
            console.log('validation Called')
            if(checkControl?.errors && !checkControl.errors['matching'])
            {
                return null;
            }
            if(control?.value !==checkControl?.value){
                console.log('if block')
                controls.get(checkControlName)?.setErrors({matching:true});
                return {matching:true};
            }
            else
            return null;
        }
    }

}