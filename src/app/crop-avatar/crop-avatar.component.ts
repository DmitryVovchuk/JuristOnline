import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { FormBuilder } from '@angular/forms';
import { LawyerService } from '../lawyer.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-crop-avatar',
  templateUrl: './crop-avatar.component.html',
  styleUrls: ['./crop-avatar.component.scss']
})
export class CropAvatarComponent implements OnInit {

  imageChangedEvent: any = '';
  croppedImage  = '';
  croopedFromServer = '';
  isChanged = false;
  constructor(private formBuilder:FormBuilder,private lawyerService:LawyerService) { }

  ngOnInit() {
    this.croppedImage = this.lawyerService.lawyerAnket.avatar;
  }
  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
    const file = (event.target as HTMLInputElement).files[0];
    this.isChanged = true;
  }

  updateAvatar():Observable<any>{
    let fd = new FormData();
    fd.append('avatar',this.croppedImage);
    return this.lawyerService.updateAvatar(fd);
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }
  imageLoaded() {
    // show cropper
  }
  cropperReady() {
      // cropper ready
  }
  loadImageFailed() {
      // show message
  }

}
