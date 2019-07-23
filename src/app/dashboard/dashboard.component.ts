import { Component, OnInit } from '@angular/core';
import { Account} from '../Account';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  i: number;
  mytable: string;

  accounts = [
    new Account('Checkings', 480),
    new Account('Savings', 4000)
  ];

  accountsTotal = this.accounts[0].balance + this.accounts[1].balance;
}
