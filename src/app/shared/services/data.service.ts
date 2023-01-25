import { BehaviorSubject, filter, map, Observable, Subject } from "rxjs";

export class DataService{
    myCustomObs : Observable<any> | any = Observable.
    create((observer:any)=>{
        let count = 0;
        setInterval(()=>{
            if(count > 9){
                observer.error(new Error("This is custome error")) 
            }
            observer.next(count)
            if(count === 7){
                observer.complete();
            }
            count++;
        }, 1000)
    })

    dataHandlerSubject = new Subject();
    dataHandlerBehaviorSubject = new BehaviorSubject("Shivansh(BehaviorSubject value)");

    filterData(){
        return this.myCustomObs.pipe(
            filter((data : any )=>{
                return data > 2;        //filter data after 2
            }),
            map((data : any)=>{
                return 'Round : ' + data;  //add some another things with data
            })
        )
    }
    
}