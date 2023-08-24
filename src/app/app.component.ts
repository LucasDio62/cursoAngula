import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public getData: {nome: string, idade: number} | undefined;
  public addValue: number = 0;
  constructor() {}

  ngOnInit(): void {
    
  }
  public setData(event: {nome: string, idade: number}) {
    this.getData = event;
  }
  public addv() {
    this.addValue += 1;
  }
}
