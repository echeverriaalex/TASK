import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  formTask: FormGroup = this.fb.group({
    title: ["", Validators.required],
    description: ["", Validators.required]
  })

  constructor(private fb:FormBuilder){}

  SaveTask(){

  }

}
