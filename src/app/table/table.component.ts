import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  _getDateAndTime = (date) => {
    let current = new Date(date);
    let cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
    let cTime = current.getHours() + ":" + current.getMinutes();
    let dateTime = cDate + '\n' + cTime;

    var hours = current.getHours();
    var hours = (hours + 24 - 2) % 24;
    var mid = 'am';
    if (hours > 12) {
      mid = 'pm';
    }

    return dateTime + " " + mid;
  }

  ngOnInit() {
  }

}
