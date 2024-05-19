import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/Models';
import { UsersService } from 'src/app/core/services/users/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  formLogIn: FormGroup = this.formBuilder.group({
    email: ["", [Validators.required]],
    password: ["", [Validators.required]]
  })

  constructor(private usersServise:UsersService, private formBuilder:FormBuilder, private router:Router){}

  ngOnInit(): void { }

  logIn(){
    if(this.formLogIn.invalid) return

    let user = {
      email: this.formLogIn.get("email")?.value,
      password: this.formLogIn.get("password")?.value
    }

    console.log(user);
    

    if(this.formLogIn.valid){
      this.usersServise.getUserByEmail(user.email).subscribe({

        next: (user)=>{
          console.log("User encontrado --> ");
          console.log(user);

          //sessionStorage("id", user);
          
        },
        error: (error)=>{
          console.log("El error dice: ");
          console.log(error);
          
        }

      })

      this.router.navigate(["/task/add"]);
    }
  }
}