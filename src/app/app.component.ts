import { Component, TemplateRef } from '@angular/core';
import { WishItem } from '../shared/models/wishitem';

const filters = [
  (item : WishItem) => item,
  (item : WishItem) => !item.isComplete,
  (item : WishItem) => item.isComplete,
]

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

  listFilter : any = '0';
  get visibleItems() : WishItem[] {
    return this.items.filter(filters[this.listFilter])
  }

  toggleItem(item: WishItem) {
    item.isComplete = !item.isComplete;
    console.log(item);
  }
}
