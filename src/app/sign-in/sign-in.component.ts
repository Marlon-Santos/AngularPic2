import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer2,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../core/services/auth.service';
import { User } from '../core/model/User.interface';
import { Router } from '@angular/router';
import { PlataformService } from '../core/services/plataform.service';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SingInComponent implements OnInit {
  @ViewChild('userName') userNameView: ElementRef<HTMLInputElement>;
  formGroup: FormGroup;
  constructor(
    private formBuild: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private render: Renderer2
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuild.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      stayLoged: [true],
    });
  }
  onSubmit() {
    const userName = this.formGroup.get('userName').value;
    const password = this.formGroup.get('password').value;
    const user: User = { userName, password };
    this.authService.authenticator(user).subscribe(
      (sucess) => {
        this.router.navigate(['user', userName, 'photos']);
      },
      (error) => {
        alert(error.message);
        this.formGroup.reset();
        this.render.selectRootElement('#userName').focus();
      }
    );
  }
}
