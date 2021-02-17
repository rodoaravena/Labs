import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import {
  ButtonsConfig,
  ButtonsStrategy,
  DotsConfig,
  GalleryService,
  Image,
  KS_DEFAULT_BTN_CLOSE,
  KS_DEFAULT_BTN_DELETE,
  KS_DEFAULT_BTN_DOWNLOAD,
  KS_DEFAULT_BTN_EXTURL,
  KS_DEFAULT_BTN_FULL_SCREEN,
  ButtonEvent,
  ButtonType,
  PlainGalleryConfig,
  PlainGalleryStrategy,
  AdvancedLayout,
} from '@ks89/angular-modal-gallery';

@Component({
  selector: 'app-gallery-grid',
  templateUrl: './gallery-grid.component.html',
  styleUrls: ['./gallery-grid.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GalleryGridComponent implements OnInit {


  imagesRect: Image[] = [
    new Image(
      0,
      { // modal
        img: 'assets/images/big-lightgallry/013.jpg',
        extUrl: 'http://www.google.com',
        description: 'Image Caption 1'
      },
    ),
    new Image(
      1,
      { // modal
        img: 'assets/images/big-lightgallry/014.jpg',
        extUrl: 'http://www.google.com',
        description: 'Image Caption 2'
      },
    ),
    new Image(
      2,
      { // modal
        img: 'assets/images/big-lightgallry/015.jpg',
        extUrl: 'http://www.google.com',
        description: 'Image Caption 3'
      },
    ),
    new Image(
      3,
      { // modal
        img: 'assets/images/big-lightgallry/016.jpg',
        extUrl: 'http://www.google.com',
        description: 'Image Caption 4'
      },
    ),
    new Image(
      4,
      { // modal
        img: 'assets/images/big-lightgallry/012.jpg',
        extUrl: 'http://www.google.com',
        title: 'Portfolio Title',
        description: 'Image Caption 5'
      },
    ),
    new Image(
      5,
      { // modal
        img: 'assets/images/big-lightgallry/01.jpg',
        extUrl: 'http://www.google.com',
        description: 'Image Caption 6'
      },
    ),
    new Image(
      6,
      { // modal
        img: 'assets/images/big-lightgallry/02.jpg',
        extUrl: 'http://www.google.com',
        description: 'Image Caption 1'
      },
    ),
    new Image(
      7,
      { // modal
        img: 'assets/images/big-lightgallry/03.jpg',
        extUrl: 'http://www.google.com',
        description: 'Image Caption 8'
      },
    ),
    new Image(
      8,
      { // modal
        img: 'assets/images/big-lightgallry/04.jpg',
        extUrl: 'http://www.google.com',
        description: 'Image Caption 9'
      },
    ),
    new Image(
      9,
      { // modal
        img: 'assets/images/big-lightgallry/05.jpg',
        extUrl: 'http://www.google.com',
        description: 'Image Caption 10'
      },
    ),
    new Image(
      10,
      { // modal
        img: 'assets/images/big-lightgallry/06.jpg',
        extUrl: 'http://www.google.com',

        description: 'Image Caption 11'
      },
    ),
    new Image(
      11,
      { // modal
        img: 'assets/images/big-lightgallry/07.jpg',
        extUrl: 'http://www.google.com',
        description: 'Image Caption 12'
      },
    ),
  ];

  constructor(private galleryService: GalleryService) { }

  buttonsConfigDefault: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.DEFAULT
  };
  buttonsConfigSimple: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.SIMPLE
  };
  buttonsConfigAdvanced: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.ADVANCED
  };
  buttonsConfigFull: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.FULL
  };
  buttonsConfigCustom: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.CUSTOM,
    buttons: [
      KS_DEFAULT_BTN_FULL_SCREEN,
      KS_DEFAULT_BTN_DELETE,
      KS_DEFAULT_BTN_EXTURL,
      KS_DEFAULT_BTN_DOWNLOAD,
      KS_DEFAULT_BTN_CLOSE
    ]
  };

  customPlainGalleryRowDescConfig: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.CUSTOM,
    layout: new AdvancedLayout(-1, true)
  };

  openImageModalRowDescription(image: Image) {
    const index: number = this.getCurrentIndexCustomLayout(image, this.imagesRect);
    this.customPlainGalleryRowDescConfig = Object.assign({}, this.customPlainGalleryRowDescConfig, { layout: new AdvancedLayout(index, true) });
  }

  private getCurrentIndexCustomLayout(image: Image, images: Image[]): number {
    return image ? images.indexOf(image) : -1;
  };
  onButtonBeforeHook(event: ButtonEvent) {
    if (!event || !event.button) {
      return;
    }

    if (event.button.type === ButtonType.DELETE) {
      this.imagesRect = this.imagesRect.filter((val: Image) => event.image && val.id !== event.image.id);
    }
  }

  onButtonAfterHook(event: ButtonEvent) {
    if (!event || !event.button) {
      return;
    }
  }

  onCustomButtonBeforeHook(event: ButtonEvent, galleryId: number | undefined) {
    if (!event || !event.button) {
      return;
    }

    if (event.button.type === ButtonType.CUSTOM) {
      this.addRandomImage();
      setTimeout(() => {
        this.galleryService.openGallery(galleryId, this.imagesRect.length - 1);
      }, 0);
    }
  }

  onCustomButtonAfterHook(event: ButtonEvent, galleryId: number | undefined) {
    if (!event || !event.button) {
      return;
    }
  }

  addRandomImage() {
    const imageToCopy: Image = this.imagesRect[Math.floor(Math.random() * this.imagesRect.length)];
    const newImage: Image = new Image(this.imagesRect.length - 1 + 1, imageToCopy.modal, imageToCopy.plain);
    this.imagesRect = [...this.imagesRect, newImage];
  }

  ngOnInit() { }

}


