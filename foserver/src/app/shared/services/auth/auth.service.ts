import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environment/environment";
import { ToastrService } from "ngx-toastr";
@Injectable({
  providedIn: "root",
})
export class AuthService {
  apiUrl = environment.apiUrl;
  private loginURL =environment.apiUrl+'login';
  private registerURL =environment.apiUrl+'register';
  private getDataURL =environment.apiUrl+'user_details/get';
  private updateDataURL = environment.apiUrl+'user_details/update';
  private changeUserPasswordURL = environment.apiUrl+'user/update/password';
  private deleteUserURL = environment.apiUrl+'user/remove/account';
  public oauthLoginURL = environment.apiUrl+'/oauth/login';

  private userSubject = new BehaviorSubject<any>(null); 
  user = this.userSubject.asObservable();
  private loggedInSubject: BehaviorSubject<boolean>;
  isLoggedIn$!: Observable<boolean>;

  constructor(private http: HttpClient, private toastrService:ToastrService) {
    this.loggedInSubject = new BehaviorSubject<boolean>(this.isAuthenticatedUser());
    this.isLoggedIn$ = this.loggedInSubject.asObservable();
  }

  register(jsonData: any): Observable<any> {
    return this.http.post<any>(this.registerURL, jsonData).pipe(map((data) => {
      if(data.errCode==0){
        this.setSessionFromLoginResponse(data);
      }
      return data;
    }));
  }

  setSessionFromLoginResponse(data: any): void {
    localStorage.setItem('Token', data.access_token);

    const payloadBase64 = data.access_token.split('.')[1];
    const decodedPayload = JSON.parse(atob(payloadBase64));
    const subData = JSON.parse(decodedPayload.sub);

    const userId = data.user_id;
    const userName = data.user_name;
    const exp = decodedPayload.exp;

    localStorage.setItem('userId', userId);
    localStorage.setItem('username', userName);
    localStorage.setItem('expiry', exp);

    this.userSubject.next(data.data_rec ?? subData);
    this.loggedInSubject.next(true);
  }

  login(jsonData:any): Observable<any>{
    return this.http.post<any>(this.loginURL,jsonData).pipe(map((data) => {
      if(data.errCode==0){
        this.setSessionFromLoginResponse(data);
      }
      return data;
    }));
  }

  isAuthenticatedUser():boolean{
    const token = localStorage.getItem("Token");
    const expiry = Number(localStorage.getItem("expiry"));
    const currentTime = Math.floor(Date.now() / 1000);
    if (!token || currentTime > expiry) {
    // this.toastrService.error('Session Expired','Error')
      return false;
    }
    return true;
  }

  logout(){
    this.loggedInSubject.next(false);
    localStorage.removeItem("Token");
    localStorage.removeItem("userId");
    localStorage.removeItem("expiry");
    localStorage.removeItem("username");
    this.userSubject.next(null);
  }

  getUserId(){
    return localStorage.getItem("userId");
  }

  getToken(){
    return localStorage.getItem("Token");
  }

  getUserName(){
    return localStorage.getItem("username");
  }

  getUserData(user_id:any){
    const url = `${this.getDataURL}?user_id=${user_id}`;  
    return this.http.get(url);  
  }

  updatedUserData(jsonData: any): Observable<any>{
    return this.http.post<any>(this.updateDataURL, jsonData).pipe(map((data) => {
      return data;
    }));
  }

  changeUserPassword(jsonData: any): Observable<any>{
    return this.http.post<any>(this.changeUserPasswordURL, jsonData);
  }

  deleteUser(user_id:any){
    return this.http.post(this.deleteUserURL,user_id); 
  }
}
