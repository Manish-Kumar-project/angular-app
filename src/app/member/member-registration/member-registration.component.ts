import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormArray, NgForm } from '@angular/forms';
import { Subject } from 'rxjs';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-member-registration',
  templateUrl: './member-registration.component.html',
  styleUrls: ['./member-registration.component.css']
})
export class MemberRegistrationComponent implements OnInit {

  member = {};
  firstName = '';
  lastName = '';
  email = '';
  phone = '';
  secondaryPhone = '';
  dateOfBirth = '';
  gender = '';
  street = "";
  colony = '';
  area = '';
  city = '';
  pinCode = '';
  proofType='';
  identityNumber = '';
  address = {};
  addressList:any=[];
  idproof={};
  idProofList:any= [];
  testId = '';
  testName = '';
  testObject:any = {};

  public testSubject = new Subject<String>();
  public testObjectSubject = new Subject<Object>();
  testEventEmitter = new EventEmitter<Object>();

  emp = {
    name: 'james',
    emailid : 'james@gmail.com'
  }

  
  constructor(private _memberService: MemberService) { }

  ngOnInit(): void {
    this.testEventEmitter.emit(this.emp);
    // this.member = {
    //   firstName: '',
    // }
    // this.testSubject.subscribe(d=>{
    //   console.log('testing data',d);
    // })
    // this.testSubject.subscribe(d=>{
    //   console.log('testing data 2',d);
    // })
    // this.testSubject.subscribe(d=>{
    //   console.log('testing data 3',d);
    // })
    // this.testSubject.subscribe(d=>{
    //   console.log('testing data 4',d);
    // })
    // this.testSubject.next("Hello World");

    // this.testSubject.subscribe(d=>{
    //   console.log('testing data 2',d);
    // })
    
    // this.testObjectSubject.subscribe(emp=>{
    //   console.log('testing the employee Object',emp);
    // })
    // this.testObjectSubject.subscribe(emp=>{
    //   console.log('testing the employee Object - 1',emp);
    // })
    // this.testObjectSubject.subscribe(emp=>{
    //   console.log('testing the employee Object - 2 ',emp);
    // })
    // this.testObjectSubject.next(this.emp);

    this.testEventEmitter.subscribe(emp=>{
      console.log('test event emitter in log',emp)
this.testObject = emp;    })
    this.testEventEmitter.emit(this.emp);
    this.testEventEmitter.subscribe(emp=>{
      console.log('test event emitter in log 2',emp)
this.testObject = emp;    })

  }

  addAdress(addressInfo: NgForm){

  this.testObjectSubject.subscribe(emp=>{
    console.log("testing testing ", emp);
  })
  this.testEventEmitter.subscribe(emp=>{
    console.log('test event emitter in log',emp)
  })
  console.log('test object ', this.testObject);
    let addressRequest = {
      street: addressInfo.value.street ? addressInfo.value.street : '',
      colony: addressInfo.value.colony ? addressInfo.value.colony : '',
      area: addressInfo.value.area ? addressInfo.value.area : '',
      city: addressInfo.value.city ? addressInfo.value.city : '',
      pinCode: addressInfo.value.pinCode ? addressInfo.value.pinCode : '',
    };
    if(addressRequest !== undefined){
      this.addressList.push(addressRequest)
    }
    console.log(addressRequest);
    console.log(this.addressList);
    addressInfo.reset();
  }
  addIdentityProof(indentityProofForm:NgForm){
    let idProofRequest = {
      typeOfProof: indentityProofForm.value.proofType ? indentityProofForm.value.proofType : '',
      idNumber: indentityProofForm.value.identityNumber ? indentityProofForm.value.identityNumber : '',
    };
    
    if(idProofRequest !== undefined){
      this.idProofList.push(idProofRequest)
    }
    indentityProofForm.reset();
  }
  saveMember(): void {
    let request = {
      firstName: this.firstName ? this.firstName : '',
      lastName: this.lastName ? this.lastName : '',
      email: this.email ? this.email : '',
      phone: this.phone ? this.phone : '',
      secondaryPhone: this.secondaryPhone ? this.secondaryPhone : '',
      dob: this.dateOfBirth ? this.dateOfBirth : '',
      gender: this.gender ? this.gender : '',
      listOfAddress: this.addressList?this.addressList:'',
      listOfIdentityProof:this.idProofList
    }
    this._memberService.saveMemberDetails(request).subscribe((response) => this.success(), (error) =>this.failure(error));
    ;
    console.log(request)
  }
  success() {
    // this.toastr.success('Saved Successfully')  
    }
    failure(error: any) {
     
    } 
 
	}



