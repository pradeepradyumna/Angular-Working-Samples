import { FormGroup } from '@angular/forms';

export function PasswordChecker(pwd1: string, pwd2: string) {
  return (formGroup: FormGroup) => {
    const password = formGroup.controls[pwd1];
    const confPassword = formGroup.controls[pwd2];

    if (password.value !== confPassword.value) {
      confPassword.setErrors({ mustmatch: true });
    } else {
      confPassword.setErrors(null);
    }
  };
}
