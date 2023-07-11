import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {

  siginForm!: FormGroup;

  submitted = false;

  constructor(private formBuilder: FormBuilder, private user: UserService, private snackBar: MatSnackBar, private route: Router) {}

  ngOnInit(){
    this.siginForm = this.formBuilder.group({
      emailid: ['',[Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  get f(){return this.siginForm.controls;}
  onSubmit(){
    this.submitted =true;
    if(this.siginForm.valid)
    {
      let payload = {
        EmailID: this.siginForm.value.emailid,
        Password: this.siginForm.value.password
      }
      this.user.login(payload).subscribe((response:any)=>{
        console.log(response);
        localStorage.setItem('token',response);
        this.snackBar.open("Login Successfully", '',{duration: 2000})
      })
    }
  }
}
