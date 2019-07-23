import { Component, OnInit } from '@angular/core';
import { Account} from '../Account';
import { checkBindingNoChanges } from '@angular/core/src/view/util';

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

  gridOptions = [
    
  ];

  defaultColDef = {
    resizable: true,
    autoSizeColumns: true
  }
  columnDefs = [
    {headerName: 'Account Name', field: 'account', editable: true},
    {headerName: 'Account Balance', field: 'balance'},
    {headerName: 'Total', field: 'total'}
  ];

  rowData = [
    {account: this.accounts[0].name, balance: this.accounts[0].balance},
    {account: this.accounts[1].name , balance: this.accounts[1].balance},
    {total: this.accountsTotal}
  ];
}
