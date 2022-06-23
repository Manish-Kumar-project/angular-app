import { Component, OnInit } from '@angular/core';
import { FormArray, NgForm } from '@angular/forms';

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

  
  constructor() { }

  ngOnInit(): void {
    this.member = {
      firstName: '',
    }
  }

  addAdress(addressInfo: NgForm){
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
    
    console.log(request)
  }
 
 
	}



