import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/Models';
import { UsersService } from 'src/app/core/services/users/users.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  registerForm: FormGroup = this.formBuilder.group({
    firstname: ["", [Validators.required]],
    lastname: ["", [Validators.required]],
    email: ["", [Validators.required]],
    password: ["", [Validators.required]],
    repeatpassword: ["", [Validators.required]]
  })
  
  constructor(private userService:UsersService, private formBuilder:FormBuilder, private router:Router){ }

  ngOnInit(): void { }  

  registerUser(){
    
    if(this.registerForm.invalid) return
    else{
      if(this.registerForm.get('password')?.value === this.registerForm.get('repeatpassword')?.value){

          let newUser = {
            id: null,
            firstname: this.registerForm.get('firstname')?.value,
            lastname: this.registerForm.get('lastname')?.value,
            email: this.registerForm.get('email')?.value,
            password: this.registerForm.get('password')?.value            
          }
          
          //console.log(newUser);

          this.userService.registerUser(newUser).subscribe({
            next: (user)=>{
              //console.log("User registrated");
              //console.log(user);
              this.router.navigate(["/home"]);



              
            },
            error: (error) =>{
              console.log("Error to register user");        
            }      
          })

          /*
            this.user.lastname = this.formRegister.get('lastname')?.value;
            this.user.firstname = this.formRegister.get('firstname')?.value;
            this.user.email = this.formRegister.get('email')?.value;
            this.user.password = this.formRegister.get('password')?.value;
            this.user.id = 1;
            */



      }
    }
  }
}