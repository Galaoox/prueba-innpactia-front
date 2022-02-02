import { Component, OnInit } from '@angular/core';
import { IPhone } from '@interfaces/IPhone';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-phones',
  templateUrl: './list-phones.component.html',
  styleUrls: ['./list-phones.component.css']
})
export class ListPhonesComponent implements OnInit {

  page = 1;
  pageSize = 5;
  collectionSize = 1;
  phones: IPhone[] = [];

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  refreshData() {

  }

}
