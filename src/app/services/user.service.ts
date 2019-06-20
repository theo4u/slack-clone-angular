
import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/iuser';
import { Observable, from } from 'rxjs';
import {tap, mergeMap} from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';
import { StreamService } from './stream.service';
import { User } from 'stream-chat';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _token: string;
  private _user: IUser;
  private _endPoint = 'http://localhost:3000'// normally you'd move this to environment.ts
  
  constructor(private _http: HttpClient,  private _stream:StreamService) { }

  join(user: IUser): Observable<any> {
    return this._http.post(`${this._endPoint}/join`, user)
      .pipe(
        tap((res: { user: IUser, token: string }) => {
          this._token = res.token
          this._user = res.user
        }),
        mergeMap(res => from(this._stream.getClient().setUser(<User>res.user, res.token)))
      )
  }

  getToken(){
    return this._token
  }

  getUser () {
    return this._user
  }

}