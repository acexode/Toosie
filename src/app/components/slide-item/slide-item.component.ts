import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-item',
  templateUrl: './slide-item.component.html',
  styleUrls: ['./slide-item.component.scss'],
})
export class SlideItemComponent implements OnInit {

  @Input() preview
  @Input() button
  @Input() items 
  @Input() pager 
  slideOpts = {}
  
  constructor() { }

  ngOnInit() {
    this.slideOpts = {
      initialSlide: 0,
      speed: 400,
      slidesPerView: this.preview,
    // coverflowEffect: {
    //   rotate: 50,
    //   stretch: 0,
    //   depth: 100,
    //   modifier: 1,
    //   slideShadows: true,
    // },
    }
  }
}
