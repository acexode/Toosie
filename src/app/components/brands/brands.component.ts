import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss'],
})
export class BrandsComponent implements OnInit {

  @Input() preview;
  @Input() button;
  @Input() pager;
  @Input() brands: Observable<any>;
  slideOpts = {};
  constructor() { }
  ngOnInit() {
    this.brands.subscribe(e => console.log(e));
    this.slideOpts = {
      initialSlide: 0,
      speed: 400,
      slidesPerView: this.preview,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    };
  }
}
