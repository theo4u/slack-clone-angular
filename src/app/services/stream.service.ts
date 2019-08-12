import { Injectable } from '@angular/core';
import { StreamChat } from 'stream-chat';

@Injectable({
  providedIn: 'root'
})
export class StreamService {
  private _client: StreamChat;

  constructor() {
    this._client = new StreamChat('v24gwb795mjz')
   }

   getClient() {
     return this._client
   }

}