import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private url = "http://localhost:8800/api/member";
  private productURL = "http://localhost:8081/api/product";
  private orderUrl = "http://localhost:9190/api/order";

  constructor(private http: HttpClient) { }
  
  saveMemberDetails(request: any): Observable<any> {
    debugger
    let url = this.url + '/customer'
    return this.http.post<any>(url, request, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'responseType': 'json'
      })
    }).pipe(catchError(this.handleError));
  }
  getProductCatalogList() {
    let url = this.productURL + '/productcatalog'
    return this.http.get(url, {
      headers: new HttpHeaders({
      })
    }).pipe(catchError(this.handleError));
  }
  getProductDetail(id: any) {
    let url = this.productURL + '/product-detail/' + id
    return this.http.get(url, {
      headers: new HttpHeaders({
      })
    }).pipe(catchError(this.handleError));
  }
  getOrderTransaction(request: any): Observable<any> {
    let httpOptions = {
    headers: new HttpHeaders(),
    responseType: 'text'
  };

    let url = this.orderUrl + '/add/member/order'
    return this.http.post(url, request,{responseType: 'text'}).pipe(catchError(this.handleError));
  }
  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(error.message);
  }
}
