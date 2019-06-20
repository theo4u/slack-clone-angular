import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './chat/sidebar/sidebar.component';
import { MainContentComponent } from './layout/main-content/main-content.component';
import { ContentHeaderComponent } from './layout/main-content/content-header/content-header.component';
import { MessageContentComponent } from './layout/main-content/message-content/message-content.component';
import { MessageInputComponent } from './layout/main-content/message-input/message-input.component';
import { RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { ChannelComponent } from './chat/channel/channel.component';
import { MessageComponent } from './chat/message/message.component';
import { HeaderComponent } from './chat/components/header/header.component';
import { ChatMessageComponent } from './chat/components/chat-message/chat-message.component';
import { ChatsComponent } from './chat/components/chats/chats.component';
import { APP_ROUTES } from './app.route';
import { NewChannelComponent } from './new-channel/new-channel.component';
import { SearchChannelComponent } from './search-channel/search-channel.component';
import { NewMessageComponent } from './new-message/new-message.component';
import { JoinComponent } from './join/join.component';


import { HttpClientModule } from '@angular/common/http'; 
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainContentComponent,
    ContentHeaderComponent,
    MessageContentComponent,
    MessageInputComponent,
    ChatComponent,
    ChannelComponent,
    MessageComponent,
    HeaderComponent,
    ChatMessageComponent,
    ChatsComponent,
    NewChannelComponent,
    SearchChannelComponent,
    NewMessageComponent,
    JoinComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
