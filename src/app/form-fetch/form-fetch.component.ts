import { Component, OnInit } from '@angular/core';
import { CustdataService } from '../custdata.service';

@Component({
  selector: 'app-form-fetch',
  templateUrl: './form-fetch.component.html',
  styleUrls: ['./form-fetch.component.css']
})
export class FormFetchComponent implements OnInit {

  constructor(private service: CustdataService) { }

data: any;

  ngOnInit(): void {
    this.AllDetails();
  }

  AllDetails() {
    this.service.getForm().subscribe(res => {
      console.log(JSON.stringify(res.body.tasks.children[0].children[0].rows));
      console.log(res.body.tasks.children[0].children[0].rows);
      this.data = res.body.tasks.children[0].children[0].rows;
    })
  }

}
