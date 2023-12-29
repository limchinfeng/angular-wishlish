import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { WishItem } from '../shared/models/wishitem';

@Injectable({
  providedIn: 'root'
})
export class WishService {

  constructor(private http: HttpClient) { }

  private getStandardOptions(): any {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
  }

  getWishes() {
    let options = this.getStandardOptions();

    //check for specific format
    options.params = new HttpParams({
      fromObject: {
        format: 'json1'
      }
    });

    return this.http.get('assets/wishes.json', options);
  }

  private addWish(wish: WishItem) {
    let options = this.getStandardOptions();

    options.headers = options.headers.set('Authorization', 'value-need-for-authorization');
    this.http.post('assets/wishes.json', wish, options);
  }
}
