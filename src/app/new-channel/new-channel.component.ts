import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ChannelService } from '../services/channel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-channel',
  templateUrl: './new-channel.component.html',
  styleUrls: ['./new-channel.component.scss']
})
export class NewChannelComponent implements OnInit {
  form: FormGroup;

  constructor(private _fb: FormBuilder, private _channelService: ChannelService, private _router: Router) { 
    this.form = this._fb.group({
      name: ['', Validators.required],
      description: ['']
    })
  }

  ngOnInit() {
  }

  async onSubmit() {
    const { name, description } = this.form.value;
    const channel = await this._channelService.create(name, description)
    this._router.navigate([`/app/channel/${channel.id}`])
  }
}