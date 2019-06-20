import { Injectable } from '@angular/core';
import { StreamChat } from 'stream-chat';

@Injectable({
  providedIn: 'root'
})
export class StreamService {
  private _client:any;

  constructor() {
    this._client = new StreamChat('API_KEY')
   }

   getClient() {
     return this._client
   }

}