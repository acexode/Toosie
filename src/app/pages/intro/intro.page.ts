import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Storage } from '@capacitor/storage';
import { Router } from '@angular/router';
import { INTRO_KEY } from 'src/app/core/guards/intro.guard';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slideOpts = {}
  
  constructor(private router: Router) { }

  ngOnInit() {
    this.slideOpts = {
      initialSlide: 0,
      speed: 400,
      slidesPerView: 1,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    };
  }
  async start() {
    await Storage.set({key: INTRO_KEY, value: 'true'});
    this.router.navigateByUrl('/login', { replaceUrl:true });
  }
}
