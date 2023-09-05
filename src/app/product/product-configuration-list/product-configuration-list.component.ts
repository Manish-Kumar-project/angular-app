import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MemberService } from 'src/app/services/member.service';
import { SharedServiceService } from 'src/app/services/shared-service.service';

@Component({
  selector: 'app-product-configuration-list',
  templateUrl: './product-configuration-list.component.html',
  styleUrls: ['./product-configuration-list.component.css']
})
export class ProductConfigurationListComponent implements OnInit {

  pageNumber = 1;
  noOfRecords = 25;
  productCategoryFilter = '';
  totalCount = 0;
  productConfigurationList:any = [];

  constructor(
    //private productConfigurationService: ProductConfigurationService,
    private memberService : MemberService,
    private sharedService: SharedServiceService,
    private _router: Router,

  ) { }

  ngOnInit(): void {
    // this.productConfigurationList = [
    //   {
    //     productCatalogName: 'vivo Z1 pro',
    //     productCatalogType: 'Andriod Mobile',
    //     productOverviewDescription: 'It is a smooth and great Mobile to purchase this mobile',
    //     productPrice: '18000.00',
    //     productImageUrl:'https://www.91-img.com/gallery_images_uploads/c/1/c1aaeb6f916a122334f2de02e335de16aab7cc7d.JPG?tr=h-550,w-0,c-at_max',
    //   },
    //   {
    //     productCatalogName: 'oneplus 7t',
    //     productCatalogType: 'Andriod Mobile',
    //     productOverviewDescription: 'It is a smooth and great Mobile to purchase this mobile',
    //     productPrice: '24000.00',
    //     productImageUrl:'https://www.91-img.com/gallery_images_uploads/c/1/c1aaeb6f916a122334f2de02e335de16aab7cc7d.JPG?tr=h-550,w-0,c-at_max',
    //   },
    //   {
    //     productCatalogName: 'oppo',
    //     productCatalogType: 'Andriod Mobile',
    //     productOverviewDescription: 'It is a smooth and great Mobile to purchase this mobile',
    //     productPrice: '22000.00',
    //     productImageUrl:'https://www.91-img.com/gallery_images_uploads/c/1/c1aaeb6f916a122334f2de02e335de16aab7cc7d.JPG?tr=h-550,w-0,c-at_max',
    //   },
    //   {
    //     productCatalogName: 'iphone',
    //     productCatalogType: 'Appple',
    //     productOverviewDescription: 'It is a smooth and great Mobile to purchase this mobile',
    //     productPrice: '80000.00',
    //     productImageUrl:'https://www.91-img.com/gallery_images_uploads/c/1/c1aaeb6f916a122334f2de02e335de16aab7cc7d.JPG?tr=h-550,w-0,c-at_max',
    //   },
    //   {
    //     productCatalogName: 'iphone',
    //     productCatalogType: 'Apple',
    //     productOverviewDescription: 'It is a smooth and great Mobile to purchase this mobile',
    //     productPrice: '10000.00',
    //     productImageUrl:'https://www.91-img.com/gallery_images_uploads/c/1/c1aaeb6f916a122334f2de02e335de16aab7cc7d.JPG?tr=h-550,w-0,c-at_max',
    //   },
    //   {
    //     productCatalogName: 'test',
    //     productCatalogType: 'Apple',
    //     productOverviewDescription: 'It is a smooth and great Mobile to purchase this mobile',
    //     productPrice: '10000.00',
    //     productImageUrl:'https://www.91-img.com/gallery_images_uploads/c/1/c1aaeb6f916a122334f2de02e335de16aab7cc7d.JPG?tr=h-550,w-0,c-at_max',
    //   },
    //   {
    //     productCatalogName: 'vivo Z1 pro',
    //     productCatalogType: 'Andriod Mobile',
    //     productOverviewDescription: 'It is a smooth and great Mobile to purchase this mobile',
    //     productPrice: '18000.00',
    //     productImageUrl:'https://www.91-img.com/gallery_images_uploads/c/1/c1aaeb6f916a122334f2de02e335de16aab7cc7d.JPG?tr=h-550,w-0,c-at_max',
    //   },
    //   {
    //     productCatalogName: 'oneplus 7t',
    //     productCatalogType: 'Andriod Mobile',
    //     productOverviewDescription: 'It is a smooth and great Mobile to purchase this mobile',
    //     productPrice: '24000.00',
    //     productImageUrl:'https://www.91-img.com/gallery_images_uploads/c/1/c1aaeb6f916a122334f2de02e335de16aab7cc7d.JPG?tr=h-550,w-0,c-at_max',
    //   },
    //   {
    //     productCatalogName: 'oppo',
    //     productCatalogType: 'Andriod Mobile',
    //     productOverviewDescription: 'It is a smooth and great Mobile to purchase this mobile',
    //     productPrice: '22000.00',
    //     productImageUrl:'https://www.91-img.com/gallery_images_uploads/c/1/c1aaeb6f916a122334f2de02e335de16aab7cc7d.JPG?tr=h-550,w-0,c-at_max',
    //   },
    //   {
    //     productCatalogName: 'iphone',
    //     productCatalogType: 'Appple',
    //     productOverviewDescription: 'It is a smooth and great Mobile to purchase this mobile',
    //     productPrice: '80000.00',
    //     productImageUrl:'https://www.91-img.com/gallery_images_uploads/c/1/c1aaeb6f916a122334f2de02e335de16aab7cc7d.JPG?tr=h-550,w-0,c-at_max',
    //   },
    //   {
    //     productCatalogName: 'iphone',
    //     productCatalogType: 'Apple',
    //     productOverviewDescription: 'It is a smooth and great Mobile to purchase this mobile',
    //     productPrice: '10000.00',
    //     productImageUrl:'https://www.91-img.com/gallery_images_uploads/c/1/c1aaeb6f916a122334f2de02e335de16aab7cc7d.JPG?tr=h-550,w-0,c-at_max',
    //   },
    //   {
    //     productCatalogName: 'test',
    //     productCatalogType: 'Apple',
    //     productOverviewDescription: 'It is a smooth and great Mobile to purchase this mobile',
    //     productPrice: '10000.00',
    //     productImageUrl:'https://www.91-img.com/gallery_images_uploads/c/1/c1aaeb6f916a122334f2de02e335de16aab7cc7d.JPG?tr=h-550,w-0,c-at_max',
    //   }, {
    //     productCatalogName: 'vivo Z1 pro',
    //     productCatalogType: 'Andriod Mobile',
    //     productOverviewDescription: 'It is a smooth and great Mobile to purchase this mobile',
    //     productPrice: '18000.00',
    //     productImageUrl:'https://www.91-img.com/gallery_images_uploads/c/1/c1aaeb6f916a122334f2de02e335de16aab7cc7d.JPG?tr=h-550,w-0,c-at_max',
    //   },
    //   {
    //     productCatalogName: 'oneplus 7t',
    //     productCatalogType: 'Andriod Mobile',
    //     productOverviewDescription: 'It is a smooth and great Mobile to purchase this mobile',
    //     productPrice: '24000.00',
    //     productImageUrl:'https://www.91-img.com/gallery_images_uploads/c/1/c1aaeb6f916a122334f2de02e335de16aab7cc7d.JPG?tr=h-550,w-0,c-at_max',
    //   },
    //   {
    //     productCatalogName: 'oppo',
    //     productCatalogType: 'Andriod Mobile',
    //     productOverviewDescription: 'It is a smooth and great Mobile to purchase this mobile',
    //     productPrice: '22000.00',
    //     productImageUrl:'https://www.91-img.com/gallery_images_uploads/c/1/c1aaeb6f916a122334f2de02e335de16aab7cc7d.JPG?tr=h-550,w-0,c-at_max',
    //   },
    //   {
    //     productCatalogName: 'iphone',
    //     productCatalogType: 'Appple',
    //     productOverviewDescription: 'It is a smooth and great Mobile to purchase this mobile',
    //     productPrice: '80000.00',
    //     productImageUrl:'https://www.91-img.com/gallery_images_uploads/c/1/c1aaeb6f916a122334f2de02e335de16aab7cc7d.JPG?tr=h-550,w-0,c-at_max',
    //   },
    //   {
    //     productCatalogName: 'iphone',
    //     productCatalogType: 'Apple',
    //     productOverviewDescription: 'It is a smooth and great Mobile to purchase this mobile',
    //     productPrice: '10000.00',
    //     productImageUrl:'https://www.91-img.com/gallery_images_uploads/c/1/c1aaeb6f916a122334f2de02e335de16aab7cc7d.JPG?tr=h-550,w-0,c-at_max',
    //   },
    //   {
    //     productCatalogName: 'test',
    //     productCatalogType: 'Apple',
    //     productOverviewDescription: 'It is a smooth and great Mobile to purchase this mobile',
    //     productPrice: '10000.00',
    //     productImageUrl:'https://www.91-img.com/gallery_images_uploads/c/1/c1aaeb6f916a122334f2de02e335de16aab7cc7d.JPG?tr=h-550,w-0,c-at_max',
    //   },
    //   {
    //     productCatalogName: 'vivo Z1 pro',
    //     productCatalogType: 'Andriod Mobile',
    //     productOverviewDescription: 'It is a smooth and great Mobile to purchase this mobile',
    //     productPrice: '18000.00',
    //     productImageUrl:'https://www.91-img.com/gallery_images_uploads/c/1/c1aaeb6f916a122334f2de02e335de16aab7cc7d.JPG?tr=h-550,w-0,c-at_max',
    //   },
    //   {
    //     productCatalogName: 'oneplus 7t',
    //     productCatalogType: 'Andriod Mobile',
    //     productOverviewDescription: 'It is a smooth and great Mobile to purchase this mobile',
    //     productPrice: '24000.00',
    //     productImageUrl:'https://www.91-img.com/gallery_images_uploads/c/1/c1aaeb6f916a122334f2de02e335de16aab7cc7d.JPG?tr=h-550,w-0,c-at_max',
    //   },
    //   {
    //     productCatalogName: 'oppo',
    //     productCatalogType: 'Andriod Mobile',
    //     productOverviewDescription: 'It is a smooth and great Mobile to purchase this mobile',
    //     productPrice: '22000.00',
    //     productImageUrl:'https://www.91-img.com/gallery_images_uploads/c/1/c1aaeb6f916a122334f2de02e335de16aab7cc7d.JPG?tr=h-550,w-0,c-at_max',
    //   },
    //   {
    //     productCatalogName: 'iphone',
    //     productCatalogType: 'Appple',
    //     productOverviewDescription: 'It is a smooth and great Mobile to purchase this mobile',
    //     productPrice: '80000.00',
    //     productImageUrl:'https://www.91-img.com/gallery_images_uploads/c/1/c1aaeb6f916a122334f2de02e335de16aab7cc7d.JPG?tr=h-550,w-0,c-at_max',
    //   },
    //   {
    //     productCatalogName: 'iphone',
    //     productCatalogType: 'Apple',
    //     productOverviewDescription: 'It is a smooth and great Mobile to purchase this mobile',
    //     productPrice: '10000.00',
    //     productImageUrl:'https://www.91-img.com/gallery_images_uploads/c/1/c1aaeb6f916a122334f2de02e335de16aab7cc7d.JPG?tr=h-550,w-0,c-at_max',
    //   },
    //   {
    //     productCatalogName: 'test',
    //     productCatalogType: 'Apple',
    //     productOverviewDescription: 'It is a smooth and great Mobile to purchase this mobile',
    //     productPrice: '10000.00',
    //     productImageUrl:'https://www.91-img.com/gallery_images_uploads/c/1/c1aaeb6f916a122334f2de02e335de16aab7cc7d.JPG?tr=h-550,w-0,c-at_max',
    //   },
    // ]
    this.getProductCataloglist();
  }
  getProductCataloglist() {
    // let request = {
    //   categoryFilter: this.productCategoryFilter ? this.productCategoryFilter : '',
    //   pageNumber: this.pageNumber,
    //   pageSize: this.noOfRecords,
      
    // }
    this.memberService.getProductCatalogList().subscribe((response: any) => this.success(response), (error) => this.failure(error));
  }
  success(response: any) {
    if (response && response.content && response.content.length > 0) {
      this.totalCount = response.totalCount;
      this.productConfigurationList = [];
      response.content.forEach((item: { productCatalogName: any; productCatalogType: any; productOverviewDescription: any;productImageUrl:any;productPrice:any;productCatalogId:any}) => {
        const productCatalog = {
          productCatalogId: item.productCatalogId? item.productCatalogId:'',
          productCatalogName: item.productCatalogName ? item.productCatalogName : '',
          productCatalogType: item.productCatalogType ? item.productCatalogType : '--',
          productOverviewDescription: item.productOverviewDescription ? item.productOverviewDescription : '--',
          productImageUrl:item.productImageUrl ? item.productImageUrl : '--',
          productPrice: item.productPrice ? item.productPrice : '--',
        };
        this.productConfigurationList.push(productCatalog);
      });
    }
  }
  failure(error: any) {
    alert(error);
  }
  getProductDetail(value: any){
    this.sharedService.sendProduct(value);
    this._router.navigate(['/product-detail',value.productCatalogId]);


  }
  
}
