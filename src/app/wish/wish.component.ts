import { Component, OnInit, TemplateRef } from '@angular/core';
import { WishItem } from '../../shared/models/wishitem';
import { EventService } from '../../shared/services/EventService';
import { WishService } from '../wish/wish.service';

@Component({
  selector: 'app-wish',
  templateUrl: './wish.component.html',
  styleUrl: './wish.component.css'
})
export class WishComponent implements OnInit{
  items : WishItem[] = [];
  
  constructor(events: EventService, private wishService: WishService) {
    events.listen('removeWish', (wish : any) => {
      let index = this.items.indexOf(wish);
      this.items.splice(index,1);
    })
  }

  ngOnInit(): void {
    this.wishService.getWishes().subscribe(
      (data: any) => {
        this.items = data;
      },
      (error: any) => {
        alert(error.message);
      }
    )
  }

  filter: any;

  toggleItem(item: WishItem) {
    item.isComplete = !item.isComplete;
    console.log(item);
  }
}
