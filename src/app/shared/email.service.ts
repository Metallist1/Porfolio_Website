import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

const baseUrl = 'https://nedas-surkus-email.herokuapp.com/';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  newEmail(data: any): Observable<any> {
    return this.http.post(baseUrl + 'email', data);
  }

}
