import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { firtsLetterLowerCase } from 'src/app/core/validators/firts-letter-lower-case.validator';
import { EqualsNameValidatorService } from 'src/app/core/validators/equals-name.validator.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NewUser } from 'src/app/core/model/User.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private equalsNameValidatorService: EqualsNameValidatorService,
    private authService: AuthService,
    private route: Router,
    private render: Renderer2
  ) {}

  ngOnInit(): void {
    this.render.selectRootElement('#email').focus();

    const equalsUserName = this.equalsNameValidatorService.existUserName();

    this.formGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      fullName: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(26),
        ],
      ],
      userName: [
        '',
        [
          Validators.required,
          firtsLetterLowerCase,
          Validators.minLength(6),
          Validators.maxLength(12),
        ],
        [equalsUserName],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12),
        ],
      ],
    });
  }
  onSubmit() {
    const newUser: NewUser = this.formGroup.getRawValue();
    this.authService.register(newUser).subscribe((result) => {
      this.route.navigate(['']);
    });
  }
}
