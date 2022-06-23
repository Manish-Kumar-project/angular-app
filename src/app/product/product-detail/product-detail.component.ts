import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
 image = "https://www.91-img.com/gallery_images_uploads/c/1/c1aaeb6f916a122334f2de02e335de16aab7cc7d.JPG?tr=h-550,w-0,c-at_max";
 product: any = {}; 
 constructor() { }

  ngOnInit(): void {

  }
  success(response: any) {
    if (response) {
      this.product = {
        productName: response.productName ? response.productName : '',
        productPrice: response.productPrice ? response.productPrice : '--',
        isOfferAvailable: response.isOfferAvailable ? response.isOfferAvailable : '--',
        productDiscount: response.productDiscount ? response.productDiscount : '--',
        productDescription: response.productDescription?response.productDescription: '--',
        imageUrl: response.imageUrl ? response.imageUrl : '--',
        itemNumber: response.itemNumber ? response.itemNumber : '--',
        productQuantityToBuy: response.productQuantityToBuy ? response.productQuantityToBuy : '--',
        productBrand: response.productBrand ? response.productBrand : '--',
        productModelNumber: response.productModelNumber ? response.productModelNumber : '--',
        productModelName: response.productModelName ? response.productModelName : '--'
      };
    }
  }
  failure(error: any) {
    alert(error);
  }

}
