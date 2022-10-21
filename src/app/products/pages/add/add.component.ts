import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'
})
export class AddComponent {

  text1: string = 'Fernando Herrera';
  color : string = 'green';


  myForm: FormGroup = this.fb.group({
    name: ["", Validators.required]
  })

  constructor(private fb: FormBuilder) { }

  hasError(field: string): boolean {
    return this.myForm.get(field)?.invalid || false;
  }


  changeName() {
    this.text1 = Math.random().toString();
  }

  changeColor() {
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.color = color;
  }


}
