import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estrututais',
  templateUrl: './diretivas-estrututais.component.html',
  styleUrls: ['./diretivas-estrututais.component.css']
})
export class DiretivasEstrututaisComponent implements OnInit{
  public condition: boolean = true;

  public list: Array<{ nome: string, idade: number }> = [
    {nome: "lucas", idade: 20},
    {nome: "alice", idade: 500},
    {nome: "felipe", idade: 2},
  ];

  public name: string = 'lucas';

  public addp() {
    this.list.push({nome: "ana", idade: 1000})
  }
  
  constructor() {}

  ngOnInit(): void {
    
  }
  public onclick() {
    if (this.condition) {
      this.condition = false
    } else {
      this.condition = true
    }
  }
}
