import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel-img',
  templateUrl: './carousel-img.component.html',
  styleUrls: ['./carousel-img.component.css']
})
export class CarouselImgComponent {

  slides = [
    {img: "http://placehold.it/350x150/000000"},
    {img: "http://placehold.it/350x150/111111"},
    {img: "http://placehold.it/350x150/333333"},
    {img: "http://placehold.it/350x150/666666"}
  ];
  slideConfig = {
    slidesToShow: 1, slidesToScroll: 1,   dots: true,
    autoplay: true,
    autoplaySpeed: 2000
  };

  addSlide() {
    this.slides.push({img: "http://placehold.it/350x150/777777"})
  }
  
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  
  slickInit(_e: any) {
    console.log('slick initialized');
  }
  
  breakpoint(_e: any) {
    console.log('breakpoint');
  }
  
  afterChange(_e: any) {
    console.log('afterChange');
  }
  
  beforeChange(_e: any) {
    console.log('beforeChange');
  }
}
