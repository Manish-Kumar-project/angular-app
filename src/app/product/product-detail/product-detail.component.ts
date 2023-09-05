import { Component, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { orderTransaction } from 'src/app/models/OrderTransaction';
import { MemberService } from 'src/app/services/member.service';
import { OrdertransactionsharedserviceService } from 'src/app/services/ordertransactionsharedservice.service';
import { SharedServiceService } from 'src/app/services/shared-service.service';
import { EventEmitter} from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers: [DatePipe]

})
export class ProductDetailComponent implements OnInit {
  // @Input() _orderTransaction: orderTransaction | undefined;
  // @Output() onUserSelected: EventEmitter<orderTransaction>;


 image = "https://www.91-img.com/gallery_images_uploads/c/1/c1aaeb6f916a122334f2de02e335de16aab7cc7d.JPG?tr=h-550,w-0,c-at_max";
 product: any = {}; 
 productQuantitBuy = 1;
 productResponse: any = {};
 currentDate = "";

 orderTransaction: orderTransaction = {
   orderUniqueId: 0,
   memberId: 2018028,
   orderTotalPrice: 0,
   productUniqueid: 12354,
   productQuantity: 0,
   productPrice: 0,
   cardType: '',
   cardNumber: 0,
   cardExpiry: 0,
   cardCvv: "",
   cardBrand: '',
   cardOwnerName: ''
 };
 constructor(private datePipe: DatePipe, private memberService: MemberService,private sharedService: SharedServiceService,private ordersharedService:OrdertransactionsharedserviceService,private _route:ActivatedRoute, private _router: Router,
  ) { 
    // this.onUserSelected = new EventEmitter();

  }
  // ngOnDestroy(): void {
  //   debugger
  //   this.sharedService.unSubScribe();
  // }

  
  ngOnInit(): void {

    console.log('check the object is empty or not',this.ordersharedService.setData({}));
    let id = this._route.snapshot.paramMap.get('id');
    console.log("-----------------------------------------------",id)
    console.log("Hello");
     this.sharedService.productMessage.subscribe(Response=>{
      console.log("hello what :",Response)
    }) 
    this.getProductDetail(id);
  }
  getProductDetail(id: any){
    this.memberService.getProductDetail(id).subscribe((response: any)  => this.success(response), (error) => this.failure(error));
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
      this.productResponse = this.product;
      this.orderTransaction.productPrice = this.product.productPrice;
      this.orderTransaction.orderTotalPrice = this.product.productPrice 

    }
    console.log(this.product);
  }
  failure(error: any) {
    alert(error);
  }
  buyProduct(){
    this.orderTransaction.productPrice = this.productResponse.productPrice;
    this.orderTransaction.orderTotalPrice = this.productResponse.productPrice * this.productQuantitBuy;
    this.orderTransaction.productQuantity = this.productQuantitBuy;
    this.ordersharedService.setData(this.orderTransaction);

    // // this.ordersharedService.orderTransaction.subscribe(response=>{
    // //   console.log(response);
    // // })

    // this.ordersharedService.sendOrderTransaction(this.orderTransaction);
    // this.sharedService.testProductEventEmitter.subscribe(response=>{
    //   console.log('-------------------------------',response);
    // })
    //  this.sharedService.addProduct(this.orderTransaction);
    // // this.onUserSelected.emit(this.orderTransaction);

    this._router.navigate(['/payment-detail']);

  }
 
}
