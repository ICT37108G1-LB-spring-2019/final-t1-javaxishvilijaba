import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { GalleryService } from '../gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  items;
  itemForm;
  constructor(
    private galleryService: GalleryService,
    private formBuilder: FormBuilder
  ) {
    this.items = [...this.galleryService.items];
    this.itemForm = this.formBuilder.group({
      title: '',
      url: '',
      votes: 0
    });
  }

  onSubmit(item) {
    console.warn('item has been submited ', item);
    this.items = this.galleryService.addItem(item);
    // this.checkoutForm.reset();
  }

  removeItem(item) {
    console.warn('item has been deleted ', item);
    this.items = this.galleryService.removeItem(item);
  }


  ngOnInit() {
  }

}
