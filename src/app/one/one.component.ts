import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit, OnDestroy {

  subscription : Subscription = new Subscription();
  subjectSub : Subscription = new Subscription();
  behaviorSub : Subscription = new Subscription();

  constructor(private dataServ : DataService) { }

  ngOnInit(): void {
    // this.subscription = interval(1000).subscribe((param:any)=>{
    //   console.log(param);
    // })

    this.subscription = this.dataServ.filterData().subscribe(
      (param:any)=>{
        console.log(param)
      },
      (err:any)=>{
        console.log(err)
      },
      ()=>{console.log("Observable is completed")})

      this.subjectSub = this.dataServ.dataHandlerSubject.subscribe(
        (param:any)=>{
          console.log(`This is from Component three, "${param}"`);
        },
        (err:any)=>{
          console.log(err);
        },
        ()=>{
          console.log("Observable is completed Component Three")
        }
      )

      this.dataServ.dataHandlerBehaviorSubject.subscribe(
        (param:any)=>{
          console.log(`This is from Component four, "${param}"`);
        },
        (err:any)=>{
          console.log(err);
        },
        ()=>{
          console.log("Observable is completed Component Four")
        }
      )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.subjectSub.unsubscribe();
    this.behaviorSub.unsubscribe();
  }

}
