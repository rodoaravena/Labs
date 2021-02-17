import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  ButtonsConfig,
  ButtonsStrategy,
  AdvancedLayout,
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
  LineLayout,
  GridLayout,
} from '@ks89/angular-modal-gallery';

@Component({
  selector: 'app-hover-effect',
  templateUrl: './hover-effect.component.html',
  styleUrls: ['./hover-effect.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HoverEffectComponent implements OnInit {

  imageIndex = 1;
  galleryId = 1;
  isPlaying = true;

  imagesRect: Image[] = [
    new Image(
      0,
      { // modal
        img: 'assets/images/big-lightgallry/013.jpg',
        extUrl: 'http://www.google.com',
        description: 'Image Caption 1'
      }, {
        img: 'assets/images/big-lightgallry/013.jpg',
      }
    ),
    new Image(
      1,
      { // modal
        img: 'assets/images/big-lightgallry/014.jpg',
        extUrl: 'http://www.google.com',
        description: 'Image Caption 2'
      }, {
        img: 'assets/images/big-lightgallry/014.jpg',
      }
    ),
    new Image(
      2,
      { // modal
        img: 'assets/images/big-lightgallry/015.jpg',
        extUrl: 'http://www.google.com',
        description: 'Image Caption 3'
      },
      {
        img: 'assets/images/big-lightgallry/015.jpg',
      }
    ),
    new Image(
      3,
      { // modal
        img: 'assets/images/big-lightgallry/016.jpg',
        extUrl: 'http://www.google.com',
        description: 'Image Caption 4'
      },
      {
        img: 'assets/images/big-lightgallry/016.jpg',
      }
    )];

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

  customPlainGalleryRowConfig: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.CUSTOM,
    layout: new AdvancedLayout(-1, true)
  };

  customPlainGalleryRowDescConfig: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.CUSTOM,
    layout: new AdvancedLayout(-1, true)
  };

  openImageModalRow(image: Image) {
    const index: number = this.getCurrentIndexCustomLayout(image, this.imagesRect);
    this.customPlainGalleryRowConfig = Object.assign({}, this.customPlainGalleryRowConfig, { layout: new AdvancedLayout(index, true) });
  }

  openImageModalRowDescription(image: Image) {
    const index: number = this.getCurrentIndexCustomLayout(image, this.imagesRect);
    this.customPlainGalleryRowDescConfig = Object.assign({}, this.customPlainGalleryRowDescConfig, { layout: new AdvancedLayout(index, true) });
  }

  private getCurrentIndexCustomLayout(image: Image, images: Image[]): number {
    return image ? images.indexOf(image) : -1;
  };

  isShownAutoNavigate = false;


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
