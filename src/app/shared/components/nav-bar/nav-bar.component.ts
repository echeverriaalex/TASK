import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/Models';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{

  @Input() user:boolean = false;

  constructor(private router:Router){}

  ngOnInit(): void {

    this.user = false
    
  }

  goToLogin(){
    this.router.navigate(["/auth/login"]);
  }


}
