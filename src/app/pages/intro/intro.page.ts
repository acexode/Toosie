import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, LoadingController } from '@ionic/angular';
import { Preferences as Storage } from '@capacitor/preferences';
import { Router } from '@angular/router';
import { INTRO_KEY } from 'src/app/core/guards/intro.guard';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  @ViewChild('introSlides') intro: IonSlides;
  slideOpts = {
    freeMode: true,
    slidesPerView: 1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 50,
  };

  constructor(
    private router: Router,
    private loadingController: LoadingController
  ) {}

  ngOnInit() {}
  async start() {
    await Storage.set({ key: INTRO_KEY, value: 'true' });
    this.router.navigateByUrl('/menu/home', { replaceUrl: true });
  }
  async swipeNext() {
    const loading = await this.loadingController.create();
    const len = await this.intro.length();
    const index = (await this.intro.getActiveIndex()) + 1;

    console.log(len, index);
    if (index === len) {
      await loading.present();

      await Storage.set({ key: INTRO_KEY, value: 'true' });
      setTimeout(() => {
        loading.dismiss().then((d) => {
          this.router.navigateByUrl('/menu/home', { replaceUrl: true });
        });
      }, 1000);
    } else {
      this.intro.slideNext();
    }
  }
}
