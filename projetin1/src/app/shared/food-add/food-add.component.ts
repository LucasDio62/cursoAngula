import { Component, Input } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.css']
})
export class FoodAddComponent {
constructor(private foodListService: FoodListService) {}

public addItemfood(value:string) {
  this.foodListService.foodListAdd(value).subscribe({
    next: res => this.foodListService.foodListAlert(res),
    error: (err) => err
  })
  let inputArquivo: any = document.querySelector('#addValue');
  inputArquivo.value = ''
}
}
