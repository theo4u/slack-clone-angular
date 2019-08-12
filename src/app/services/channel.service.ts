import { Injectable } from '@angular/core';
import { StreamService } from './stream.service';
import { INotification } from '../interfaces/inotification';
import { Channel } from 'stream-chat';
import * as shortId from 'shortid'

@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  constructor(private _streamService: StreamService) { }

  create(name: string, description: string) {
    const channelID = shortId.generate()
    return this._streamService.getClient().channel('messaging', channelID, {
      name,
      description
    }).watch({})
      .then(response => response.channel)
  }

  getWatched(): Channel[] {
    return <Channel[]><unknown>this._streamService.getClient().queryChannels(
      {}, // filter
      { last_message_at: -1 }, // sort
      {
        state: true,
        watch: true
      })
  }
}