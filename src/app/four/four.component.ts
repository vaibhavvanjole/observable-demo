import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'app-four',
  templateUrl: './four.component.html',
  styleUrls: ['./four.component.css']
})
export class FourComponent implements OnInit {

  constructor(private dataServe : DataService) { }

  ngOnInit(): void {
  }

  sendData(){
    this.dataServe.dataHandlerBehaviorSubject.next("Vanjole(from next method)");
  }
  sendError(){
    this.dataServe.dataHandlerBehaviorSubject.error(new Error("Error from component four"));
  }
  sendComplete(){
    this.dataServe.dataHandlerBehaviorSubject.complete();
  }
}
