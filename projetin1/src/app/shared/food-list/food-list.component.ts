import { Component, OnInit } from '@angular/core';
import { FoodList } from 'src/app/module/food-list';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  public foodList: FoodList | any;

  constructor (private foodListService: FoodListService) {}

  ngOnInit(): void {
    this.foodListService.foodList().subscribe({
      next: res => this.foodList = res,
      error: (err) => err
    });
    this.foodListService.emitEvent.subscribe(
      res => {
        alert(`voce add ${res.nome}`);
        return this.foodList.push(res)
      }
    )
  }
  public foodListdelete(id: number) {
    return this.foodListService.foodListdelet(id).subscribe({
      next: () => {
        this.foodList = this.foodList.filter(
        item => {
          return id !== item.id
        }
        )
      },
      error: (e) => console.log(e)
    })
  }

  public foodListedit(id: number, value: string) {
    this.foodListService.foodListedit(id, value).subscribe({
      next: (res)=> {
        return console.log(res)
      },
      error: (e) => {
        return console.log(e)
      } 
    })
  }

}
