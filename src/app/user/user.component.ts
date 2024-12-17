import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  providers: [UserService, DataService],
})
export class UserComponent implements OnInit {
  constructor(
    private userService: UserService,
    private dataService: DataService
  ) {}
  user!: { name: string };

  isLoggedIn: boolean = false;
  data: string | undefined;
  ngOnInit() {
    this.user = this.userService.user;
    this.dataService.getData().then((data) => (this.data = data as string));
  }
}
