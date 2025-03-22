import {} from '@angular/common/http';
import { Component, inject } from '@angular/core';
import {
  IonButton,
  IonContent,
  IonIcon,
  NavController,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-onboarding',
  templateUrl: './success-layer.component.html',
  styleUrl: './styles/success-layer.scss',
  imports: [IonContent, IonButton],
})
export class SuccessLayerComponent {
  private _navCtrl: NavController = inject(NavController);

  goToScanPage() {
    this._navCtrl.navigateForward('/scan'); // Переход на страницу сканирования
  }
}
