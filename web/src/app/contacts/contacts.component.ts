import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  public contacts: Contact[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.fetchContact().subscribe((contacts) => {
      this.contacts = contacts;
    });
  }

}
