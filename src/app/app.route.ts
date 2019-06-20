import { Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { ChannelComponent } from './chat/channel/channel.component';
import { MessageComponent } from './chat/message/message.component';
import { NewChannelComponent } from './new-channel/new-channel.component';
import { SearchChannelComponent } from './search-channel/search-channel.component';
import { NewMessageComponent } from './new-message/new-message.component';
import { JoinComponent } from './join/join.component';

export const APP_ROUTES: Routes = [
    {path:'', redirectTo:'app', pathMatch:'full'},
    {
        path: 'app', component: ChatComponent, 
        children: [
            { path: '', redirectTo: 'channel/general', pathMatch: 'full' },
            { path: 'channel/:channelId', component: ChannelComponent },
            { path: 'message/:userId', component: MessageComponent }
        ]
    },
    {path: 'new-channel', component: NewChannelComponent},
    {path: 'search-channel', component: SearchChannelComponent},
    {path: 'new-message', component: NewMessageComponent},
    {path: 'join', component: JoinComponent}
]