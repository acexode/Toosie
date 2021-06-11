import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss'],
})
export class BrandsComponent implements OnInit {

  @Input() preview
  @Input() button
  @Input() pager 
  slideOpts = {}
  
  constructor() { }
  items = [
    {
      img: 'assets/icon/pampers.png',
      title: ''
    },
    {
      img: 'assets/icon/emzor.png',
      title: ''
    },
    {
      img: 'assets/icon/johnson.png',
      title: ''
    },
    {
      img: 'assets/icon/banner3.jpg',
      title: ''
    }
  ]
  ngOnInit() {
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
