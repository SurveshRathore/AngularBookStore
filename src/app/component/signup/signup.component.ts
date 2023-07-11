import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  sigUpForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private user: UserService, private snackBar: MatSnackBar, private route: Router) {}

  ngOnInit(){
    this.sigUpForm = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      emailid: ['',[Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      mobile: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]]
    })
  }

  get f(){return this.sigUpForm.controls;}

  onSubmit(){
    this.submitted = true;

    if(this.sigUpForm.valid)
    {
      let payload={
        fullName: this.sigUpForm.value.fullName,
        emailId: this.sigUpForm.value.emailid,
        password: this.sigUpForm.value.password,
        mobileNumber: this.sigUpForm.value.mobile,
      }
      this.user.register(payload).subscribe((response)=>{
        console.log(response);
        this.snackBar.open("user registration successfully",'',{duration:2000})
      })
    }
  }
}
