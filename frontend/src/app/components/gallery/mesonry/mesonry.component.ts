import { IMasonryGalleryImage, MasonryGalleryComponent } from 'ngx-masonry-gallery';
import { Component, AfterViewInit, ChangeDetectorRef, ViewChild, OnInit } from '@angular/core';
import { NgxMasonryOptions } from 'ngx-masonry';

declare var hljs: any;
@Component({
  selector: 'app-mesonry',
  templateUrl: './mesonry.component.html',
  styleUrls: ['./mesonry.component.scss']
})
export class MesonryComponent implements OnInit {
  private readonly numberOfInitiallyShownImages = 8;
  private readonly numberOfImages: number = 23;
  public readonly multipleImagesCount: number = 3;
  public initialImages?: IMasonryGalleryImage[];
  public usedImages: IMasonryGalleryImage[] = [];
  public pool: IMasonryGalleryImage[] = [];
  private urls: string[] = [
    'assets/images/masonry/1.jpg',
    'assets/images/masonry/2.jpg',
    'assets/images/masonry/3.jpg',
    'assets/images/masonry/4.jpg',
    'assets/images/masonry/5.jpg',
    'assets/images/masonry/6.jpg',
    'assets/images/masonry/7.jpg',
    'assets/images/masonry/8.jpg',
    'assets/images/masonry/9.jpg',
    'assets/images/masonry/10.jpg',
    'assets/images/masonry/11.jpg',
    'assets/images/masonry/12.jpg'
  ];

  constructor() {
    // init initial images
    const images: IMasonryGalleryImage[] = [];
    for (let i = 1; i <= this.numberOfInitiallyShownImages; i++) {
      const image = this.pool[Math.floor(Math.random() * this.pool.length)];
      images.push(image);
      this.usedImages.push(image);
    }
    this.initialImages = images;
  }

  public get images(): IMasonryGalleryImage[] {
    return this.urls.map(m => <IMasonryGalleryImage>{
      imageUrl: m
    });
  }

  @ViewChild('masonryGallery',{static: true}) masonryGallery: MasonryGalleryComponent;

  ngOnInit() { }

}