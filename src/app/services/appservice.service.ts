import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  private url = "http://localhost:8800/";
  

  constructor(private http: HttpClient) { }
  
  getMemberList() {
    let url = this.url + 'member'
    return this.http.get(url, {
      headers: new HttpHeaders({
      })
    }).pipe(catchError(this.handleError));
  }
  getMemberDetailList() {
    let url = this.url + 'memberdetail'
    return this.http.get(url, {
      headers: new HttpHeaders({
      })
    }).pipe(catchError(this.handleError));
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
