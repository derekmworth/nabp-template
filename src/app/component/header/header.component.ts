import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userName = 'Derek Michael Worth';
  userInitials = 'DW';

  // Mat-Badge hidden
  hidden = true;

  constructor() { }

  ngOnInit(): void {
  }

}
