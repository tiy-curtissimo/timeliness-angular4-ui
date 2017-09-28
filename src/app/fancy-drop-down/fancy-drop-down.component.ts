import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fancy-drop-down',
  templateUrl: './fancy-drop-down.component.html',
  styleUrls: ['./fancy-drop-down.component.css']
})
export class FancyDropDownComponent implements OnInit {

  @Input()
  private icon: string;

  constructor() {
    this.icon = 'arrow_drop_down';
  }

  ngOnInit() {
  }

}
