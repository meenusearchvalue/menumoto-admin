import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {

  className = "active";
  constructor() { }

  ngOnInit() {}
  addClassToComp(event){
    this.className = event
  }

}
