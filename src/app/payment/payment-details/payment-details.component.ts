import { getLocaleDateFormat } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { orderTransaction } from 'src/app/models/OrderTransaction';
import { MemberService } from 'src/app/services/member.service';
import { OrdertransactionsharedserviceService } from 'src/app/services/ordertransactionsharedservice.service';
import { SharedServiceService } from 'src/app/services/shared-service.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit {
  private _productprice : number | undefined;
  private _orderTotalPrice: number | undefined;

  cardNumber = 0;
  fullName = '';
  productObject: any = {};
  cvv = "";
  cardExpiry = 0;
  cardType = '';
  orderTotalTest: number | undefined
  productPriceTest: number | undefined;
  product:any = [];
  productDetails: any = {};
  testObject: any = {};
  orderTransaction: orderTransaction = {
    orderUniqueId: 1188,
    memberId: 2018128,
    orderTotalPrice: 200,
    productUniqueid: 8811,
    productQuantity: 2,
    productPrice: 200,
    cardType: 'Debit Card',
    cardNumber: 12121212121212,
    cardExpiry: 102020,
    cardCvv: '222',
    cardBrand: 'MasterCard',
    cardOwnerName: 'james'
  };
  
  constructor(private ordersharedService:OrdertransactionsharedserviceService,private memberService: MemberService,private sharedService: SharedServiceService) { 
  }
  payNow(){
    debugger
    // this.getthisData();
    // console.log('testing Object ', this.testObject);
    console.log('getting data testing testing ',this.ordersharedService.getData())
    // this.orderTransaction.memberId = this.productDetails.memberId;
    //  this.orderTransaction.productPrice= this.productPriceTest;
    //  this.orderTransaction.orderTotalPrice = this.orderTotalTest;
    // this.ordersharedService.orderTransactionTest.subscribe(response=>{
    //   console.log("product what :",Response)
    //     this.productDetails = Response;
    //     // this.getData(Response);
    //     // this.orderTransaction.productPrice = response.productPrice;
    //     // this.orderTransaction.orderTotalPrice = response.orderTotalPrice;
    //     // this.orderTotal = total;
    //   //   this.product.push(this.productDetails);
    //   // console.log("------------------------------------------",Response);
    // })
    // this.orderTransaction.productPrice=
    this.orderTransaction.cardNumber = 12121212121212;
    this.orderTransaction.cardExpiry = 102020;
    this.orderTransaction.cardCvv = "222";
    this.orderTransaction.cardOwnerName = this.fullName;
    this.memberService.getOrderTransaction(this.orderTransaction).subscribe((response: any)  => this.success(response), (error) => this.failure(error));
  }
  ngOnInit(): void {
    console.log('data',this.ordersharedService.getData());
  //  debugger
  //     this.ordersharedService.orderTransaction.subscribe(Response=>{
  //       console.log("product what :",Response)
  //         this.productDetails = Response;
  //         this.testObject = Response;
  //     })
    // this.sharedService.testProductEventEmitter.subscribe((product)=>{
    //   this.testObject = product;
    // })
    // // this.sharedService.testProductEventEmitter.subscribe()
    // this.sharedService.addProduct(this.testObject);
    // // console.log('===========================================',this.orderTotal);
    // console.log('=========================================== List',this.product);
    // this.payNow();
    // this.ordersharedService._subscribeProductOrderTransaction.subscribe((response)=>{
    //   console.log('hello -------------',response);
    //   this.testObject= response;
    //   this.ordersharedService.setData(this.testObject);
    // })
    // if(this.sharedService.subsVar == undefined){
    //   this.sharedService.subsVar = this.sharedService.testProductEventEmitter.subscribe(test=>{
    //     console.log(test);
    //   })
    // }

}

success(response: any) {
  if (response) {
    alert(response);
    console.log(response)
  }
}
failure(error: any) {
  alert(error);
  console.log(error);
}
// getData(object: any){
  
// this.productDetails = object;
// console.log(this.productDetails);
// this.getProductData(this.productDetails)
// }
// getProductData(object:any){
  
//   console.log('=========/////////////=============',object);
//   this.orderTransaction.orderTotalPrice = object.orderTotalPrice;
//   this.orderTransaction.productUniqueid = object.productUniqueid;
//   this.orderTransaction.productQuantity = object.productQuantity;
//   this.orderTransaction.productPrice = object.productPrice;
//   this.getthisData();
// }
// getthisData(){
  
// // console.log(orderTransaction);
// // this.productObject.orderTotalPrice = orderTransaction.orderTotalPrice;
// // this.productObject.productQuantity=orderTransaction.productQuantity;
// // this.productObject.productPrice = orderTransaction.productPrice;
// console.log(this.orderTransaction);
// this.productPriceTest = this.orderTransaction.productPrice;
// this.orderTotalTest = this.orderTransaction.orderTotalPrice;
// // this.setProductPrice(this.orderTransaction)
// // this.payNow();
// }
// showUser(user: orderTransaction) : void {
//   // Setting selected user
//   debugger
//   this.orderTransaction = user;
//   console.log('--------------------;;;;;;;;;;;;;;;;;;;',this.orderTransaction);
// }

}
