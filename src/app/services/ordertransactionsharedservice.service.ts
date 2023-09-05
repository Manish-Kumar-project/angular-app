import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { orderTransaction } from '../models/OrderTransaction';

@Injectable({
  providedIn: 'root'
})
export class OrdertransactionsharedserviceService {
  public _subscribeProductOrderTransaction = new Subject<object>();
  // orderTransaction = this._subscribeProductOrderTransaction.asObservable();

  private _subscribeProductOrderTransactionTest = new Subject<orderTransaction>();
  orderTransactionTest = this._subscribeProductOrderTransactionTest.asObservable();

  sendOrderTransaction(request:object){
    this._subscribeProductOrderTransaction.next(request);
  }
  sendOrderTransactionTest(request:orderTransaction){
    this._subscribeProductOrderTransactionTest.next(request);
  }
  constructor() { }
  requestData:any ={};
  public setData(request:any){
    this.requestData =  request;
  }
  public getData():object{
    return this.requestData;
  }
}
