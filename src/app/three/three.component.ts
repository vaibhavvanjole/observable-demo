import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit {

  constructor(private dataServe : DataService) { }

  ngOnInit(): void {
  }

  sendData(){
    this.dataServe.dataHandlerSubject.next("Vaibhav");
  }
  sendError(){
    this.dataServe.dataHandlerSubject.error(new Error("This is custome error"))
  }
  sendComplete(){
    this.dataServe.dataHandlerSubject.complete();
  }

}
