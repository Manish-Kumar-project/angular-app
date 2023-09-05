import { EventEmitter, Injectable, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { orderTransaction } from '../models/OrderTransaction';
import { Subscription } from 'rxjs/internal/Subscription';    

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  @Output()
  public testProductEventEmitter = new EventEmitter<Object>();
  subsVar: Subscription | undefined;    


  private _subscribeProduct = new Subject<Object>();
  // private _subscribeProductOrderTransaction = new Subject<orderTransaction>();

  productMessage = this._subscribeProduct.asObservable();
  // orderTransaction = this._subscribeProductOrderTransaction.asObservable();
  constructor() { }

  sendProduct(request: Object){
    this._subscribeProduct.next(request);
  }
  // sendOrderTransaction(request:orderTransaction){
  //   this._subscribeProductOrderTransaction.next(request);
  // }
  // unSubScribe(){
  //   this._subscribeProduct.next('');
  //   this._subscribeProduct.complete();
  // }

  addProduct(request: orderTransaction){
    this.testProductEventEmitter.emit(request);
  }
}
