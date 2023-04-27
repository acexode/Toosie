import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import {  Preferences as Storage } from '@capacitor/preferences';
import { Router } from '@angular/router';
import { INTRO_KEY } from 'src/app/core/guards/intro.guard';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slideOpts = {
    freeMode: true,
    slidesPerView: 1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 50
  };

  constructor(private router: Router) { }

  ngOnInit() {

  }
  async start() {
    await Storage.set({key: INTRO_KEY, value: 'true'});
    this.router.navigateByUrl('/menu/home', { replaceUrl:true });
  }
}
