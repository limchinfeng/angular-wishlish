import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function createInvaslidDomainValidator(hosts: string[]) : ValidatorFn {
  return (control: AbstractControl) : ValidationErrors | null => {
    const value = control.value?.toLowerCase();
    const hosts = ['gmail.com', 'yahoo.com'];
  
    if(!value) {
      return null;
    }
  
    const matches = hosts.some(host => value.indexOf(`@${host}`) > -1);
  
    return matches ? { invalidEmailDomain : true} : null;
  }
}
