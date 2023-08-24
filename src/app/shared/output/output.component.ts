import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit{
  @Output() public dataEmitner = new EventEmitter();
  public list: Array<{nome: string, idade: number}> = [
    {nome: "lucas", idade: 20},
    {nome: "alice", idade: 21},
    {nome: "murilo", idade: 12},
  ]
  constructor () {}
  ngOnInit(): void {
    
  }
  public getData(event: number) {
    this.dataEmitner.emit(this.list[event])
  }
}
