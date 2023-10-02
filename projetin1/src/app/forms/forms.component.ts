import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit{
  public listComidas: Array<{comida: string, preco: string}> = [
    {comida: "salada de frutas", preco: "20"},
    {comida: "ovos mexidos", preco: "15"},
    {comida: "x-bacon", preco: "9"}
  ]
  constructor() {}
  ngOnInit(): void {

  }

  public submitForm(form: NgForm) {
    console.log(form.value)
  }

}
