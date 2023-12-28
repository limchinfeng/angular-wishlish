import { Component, TemplateRef } from '@angular/core';
import { WishItem } from '../shared/models/wishitem';

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
  title = 'angularWishlist';

  filter: any = () => {}
  get visibleItems() : WishItem[] {
    return this.items.filter(this.filter)
  }

  toggleItem(item: WishItem) {
    item.isComplete = !item.isComplete;
    console.log(item);
  }
}
