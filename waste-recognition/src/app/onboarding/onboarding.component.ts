import { Component, inject } from '@angular/core';
import { NavController } from '@ionic/angular';
import { IonButton, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  imports: [IonContent, IonButton],
  styleUrl: './styles/onboarding.component.scss',
})
export class OnboardingComponent {
  currentSlideIndex = 0;
  private _navCtrl: NavController = inject(NavController);

  slides = [
    {
      icon: 'trash-outline',
      title: 'Сканирование мусора',
      description:
        'Учитесь быстро сканировать мусор для правильной утилизации.',
    },
    {
      icon: 'recycle-outline',
      title: 'Правильная сортировка',
      description:
        'Разделяйте материалы для переработки для снижения нагрузки на природу.',
    },
    {
      icon: 'document-text-outline',
      title: 'Перейти к сканированию',
      description: 'Готовы начать? Перейдите на страницу сканирования.',
    },
  ];

  onSlideChange(event: any) {
    this.currentSlideIndex = event.realIndex;
  }

  nextSlide() {
    if (this.currentSlideIndex < this.slides.length - 1) {
      this.currentSlideIndex++;
    }
  }

  goToScanPage() {
    this._navCtrl.navigateForward('/scan');
  }

  goToSlide(index: number) {
    this.currentSlideIndex = index;
  }
}
