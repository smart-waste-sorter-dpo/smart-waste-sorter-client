import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { TuiButton } from '@taiga-ui/core/components/button';
import { TuiCarousel, TuiPagination } from '@taiga-ui/kit';

@Component({
  standalone: true,
  selector: 'onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./styles/onboarding.scss'],
  imports: [CommonModule, TuiButton, TuiCarousel, TuiPagination],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnboardingComponent {
  currentIndex = 0;
  slides = [
    {
      icon: 'assets/icons/trash.svg',
      title: 'Добро пожаловать!',
      text: 'Наше приложение поможет вам правильно сортировать мусор.',
    },
    {
      icon: 'assets/icons/trash.svg',
      title: 'Добро пожаловать!',
      text: 'Наше приложение поможет вам правильно сортировать мусор.',
    },
    {
      icon: 'assets/icons/recycle.svg',
      title: 'Сканируйте и сортируйте',
      text: 'Используйте камеру для сканирования и получения информации.',
    },
    {
      icon: 'assets/icons/check.svg',
      title: 'Начнем!',
      text: 'Готовы попробовать? Давайте начнем!',
    },
  ];

  constructor(private router: Router) {}

  nextSlide(): void {
    if (this.currentIndex < this.slides.length - 1) {
      this.currentIndex++;
    }
  }

  goToScanner(): void {
    this.router.navigate(['/scanner']);
  }
}
