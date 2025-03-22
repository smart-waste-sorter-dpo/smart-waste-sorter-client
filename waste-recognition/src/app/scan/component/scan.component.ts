import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import {
  IonButton,
  IonContent,
  NavController,
} from '@ionic/angular/standalone';
import { catchError, EMPTY, from, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-onboarding',
  templateUrl: './scan.component.html',
  imports: [IonContent, IonButton, HttpClientModule],
  styleUrl: './styles/scan.component.scss',
})
export class ScanComponent {
  protected loading: WritableSignal<boolean> = signal(false);
  private _imageUrl?: string = '';
  private _httpClient: HttpClient = inject(HttpClient);
  private _router: Router = inject(Router);

  openCamera() {
    from(
      Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
      })
    )
      .pipe(
        switchMap((photo) => {
          this._imageUrl = photo.webPath;
          return this.uploadImage(photo);
        }),
        catchError(() => {
          this._router.navigate(['/error']);
          return EMPTY;
        })
      )
      .subscribe(() => {
        this._router.navigate(['/success']);
      });
  }

  uploadImage(photo: any) {
    const formData = new FormData();
    return from(fetch(photo.webPath!).then((r) => r.blob())).pipe(
      switchMap((imageBlob: Blob) => {
        formData.append('file', imageBlob, 'scan-image.jpg');
        return this._httpClient.post(
          'http://localhost:8000/api/v1/wastes/classify/',
          formData
        );
      }),
      catchError(() => {
        this._router.navigate(['/error']);
        return EMPTY;
      })
    );
  }
}
