import { Component, TemplateRef } from '@angular/core';
import { WishItem } from '../shared/models/wishitem';
import { EventService } from './../shared/services/EventService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items : WishItem[] = [
    new WishItem('To Learn Angular'),
    new WishItem('Get Coffee', true),
    new WishItem('Meet Deon')
  ];
  
  constructor(events: EventService) {
    events.listen('removeWish', (wish : any) => {
      let index = this.items.indexOf(wish);
      this.items.splice(index,1);
    })
  }

  filter: any;

  toggleItem(item: WishItem) {
    item.isComplete = !item.isComplete;
    console.log(item);
  }
}
