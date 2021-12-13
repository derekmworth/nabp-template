import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // Mat-Badge hidden
  hidden = true;
  userName = 'Derek Worth';
  userInitials = 'DW';



  constructor() { }

  ngOnInit(): void {
  }

}
