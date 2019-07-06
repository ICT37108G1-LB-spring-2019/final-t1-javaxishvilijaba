import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../gallery.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  item;

  constructor(
    private galleryService: GalleryService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(this.galleryService.items[+params.get('id')]);
      this.item = this.galleryService.items[+params.get('id')];
    });
  }

}
