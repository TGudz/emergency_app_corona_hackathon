import { Component, OnInit } from '@angular/core';

class OrderDetail {
  constructor(
     public name: string,
     public score: number,
     public amount: number,
     public checked: boolean = true,
  ) { }
};


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {

  public orderDetails: OrderDetail[] = [
    new OrderDetail('Faces&Names', 100, 100),
    new OrderDetail('Friends', 98, 200),
    new OrderDetail('No Name', 95, 50),
    new OrderDetail('Carmen', 94, 500, false),
    new OrderDetail('BFS', 94, 500, false),
    new OrderDetail('Euler\'s', 91, 1000, false),
  ];

  constructor() { }

  ngOnInit() {}

  getTotalOrders() {
    let total = 0;
    this.orderDetails.forEach(item => {
      if (item.checked) {
        total += item.amount;
      }});
    return total;
  }
}
