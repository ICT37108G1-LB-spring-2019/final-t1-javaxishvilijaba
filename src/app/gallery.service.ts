import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  items = [];

  constructor() {
    if (localStorage.getItem('items')) {
      console.log(JSON.parse(localStorage.getItem('items')));
      this.items = JSON.parse(localStorage.getItem('items'));
    }
  }

  addItem(item) {
    if (item.url !== '') {
      // fetch()
      this.items.push(item);
      localStorage.setItem('items', JSON.stringify(this.items));
    }
    return this.items;
  }

  removeItem(item) {
    this.items.splice(this.items.indexOf(item), 1);
    localStorage.setItem('items', JSON.stringify(this.items));
    return this.items;
  }

  upvoteItem(item) {
    // this.items.push(item);
  }

  downvoteItem(item) {
    // this.items.push(item);
  }
}
