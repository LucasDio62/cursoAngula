import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges{

  @Input() public title:string = "bem vindo";

  constructor() {}

  ngOnInit(): void { }
  ngOnChanges(changes: SimpleChanges): void {//quandoa enttrada de dado o OnChands é ativado juntoa sua funçao
    alert('pedo')
  }
}
