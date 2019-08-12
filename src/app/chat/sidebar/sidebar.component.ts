import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { INotification } from 'src/app/interfaces/inotification';
import { UserService } from 'src/app/services/user.service';
import { IUser } from 'src/app/interfaces/iuser';
import { ChannelService } from '../../services/channel.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  channels = [];
  directMessages: INotification[] = [];
  user: IUser

  constructor(private _router: Router, private _userService: UserService, private _channelService: ChannelService) {}

  async ngOnInit() {
    this.user = this._userService.getUser()
    if (!this.user) {
      return
    }
    this.channels = await this._channelService.getWatched()
    this.directMessages.push({
      name: this.user.displayName,
      active: true,
      type: 'message'
    })
  }

  openLink (link: string) {
    this._router.navigate([link])
  }

}