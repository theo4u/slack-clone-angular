import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})
export class JoinComponent implements OnInit {
  joinForm: FormGroup;
  joining: boolean;

  constructor(private _fb: FormBuilder, private _userService: UserService, private _router: Router) {
    this.joinForm = this._fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      displayName: ['', Validators.required],
      image: ['']
    })
   }

  ngOnInit() {
  }

  onSubmit() {
    this.joining  = true
    const param = this.joinForm.value;
    this._userService.join(param)
      .subscribe(() => {
        this._router.navigate(['/app/channel/general'])
      },
        (error) => {
          this.joining = false;
          alert(error.message)
          console.error(error);
        });
  }
}