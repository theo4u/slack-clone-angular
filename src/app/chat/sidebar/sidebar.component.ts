import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { INotification } from 'src/app/interfaces/inotification';
import notifications from 'src/app/constants/notifications';
import { UserService } from 'src/app/services/user.service';
import { IUser } from 'src/app/interfaces/iuser';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  channels: INotification[] = [];
  directMessages: INotification[] = [];
  user: IUser

  constructor(private _router: Router, private _userService: UserService) {}

  ngOnInit() {
    this.user = this._userService.getUser()
    if (!this.user) {
      return
    }
    this.channels = notifications.filter(notification => notification.type === 'channel')
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
