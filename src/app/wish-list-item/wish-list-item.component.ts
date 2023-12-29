import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WishItem } from '../../shared/models/wishitem';
import events from '../../shared/services/EventService';

@Component({
  selector: 'wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css'
})
export class WishListItemComponent {
  @Input() wishText! : string; //non null
  @Input() fullfilled! : boolean;

  @Output() fullfilledChange = new EventEmitter<boolean>();

  get cssClasses() {
    // return this.fullfilled ? ['strikeout', 'text-muted'] : [];
    return {'strikeout text-muted': this.fullfilled}
  }

  removeWish() {
    events.emit('removeWish', this.wishText)
  }

  toggleFullfilled() {
    this.fullfilled = !this.fullfilled;
    this.fullfilledChange.emit(this.fullfilled);
  }
}
