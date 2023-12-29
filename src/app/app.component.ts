import { Component, OnInit, TemplateRef } from '@angular/core';
import { WishItem } from '../shared/models/wishitem';
import { EventService } from './../shared/services/EventService';
import { WishService } from './wish.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title="";
  items! : WishItem[];
  
  constructor(events: EventService, private wishService: WishService) {
    events.listen('removeWish', (wish : any) => {
      let index = this.items.indexOf(wish);
      this.items.splice(index,1);
    })
  }

  ngOnInit(): void {
    this.wishService.getWishes().subscribe((data: any) => {
      this.items = data;
    })
  }

  filter: any;

  toggleItem(item: WishItem) {
    item.isComplete = !item.isComplete;
    console.log(item);
  }
}
