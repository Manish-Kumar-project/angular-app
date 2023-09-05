import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/appservice.service';

@Component({
  selector: 'app-demotest',
  templateUrl: './demotest.component.html',
  styleUrls: ['./demotest.component.css']
})
export class DemotestComponent implements OnInit {

  constructor(private _appService: AppService) { }

  ngOnInit(): void {
    this._appService.getMemberList().subscribe((response: any) => this.success(response), (error) => this.failure(error));
    this._appService.getMemberDetailList().subscribe((response: any) => this.success(response), (error) => this.failure(error));

  }
  success(response: any) {
console.log(response)  }
  failure(error: any) {
    alert(error);
  }



}
