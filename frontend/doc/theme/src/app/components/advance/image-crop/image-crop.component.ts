import { Component, OnInit, ViewChild } from '@angular/core';
import { ImageCroppedEvent } from './image-cropper/interfaces/image-cropped-event.interface'
import { ImageCropperComponent } from './image-cropper/component/image-cropper.component';

@Component({
  selector: 'app-image-crop',
  templateUrl: './image-crop.component.html',
  styleUrls: ['./image-crop.component.scss']
})
export class ImageCropComponent implements OnInit {

  constructor() { }

  ngOnInit() {  }
  
  @ViewChild('ImageCropperComponent',{static: true}) imageCropper: ImageCropperComponent;
  public imageChangedEvent : any = '';
  public croppedImage : any = '';
  public showCropper = false;

  // Display dummy cropped image 
  public imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }

  //Display cropper on selected image
  public imageLoaded() {
    this.showCropper = true;
  }

  //Select a file
  public fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  
  //Rotate an image to left
  public rotateLeft() {
    this.imageCropper.rotateLeft();
  }
 //Rotate an image to right
 public rotateRight() {
    this.imageCropper.rotateRight();
  }

 //Flip an Image Horizontal
 public flipHorizontal() {
    this.imageCropper.flipHorizontal();
  }

 //Flip an Image Vertical
 public flipVertical() {
    this.imageCropper.flipVertical();
  }

  cropperReady() { }

  loadImageFailed() {  }

}
