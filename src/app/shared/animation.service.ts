import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AnimationService {

  constructor() {
  }

  countTime(max_count: any,addPerTick: any, time: number): Observable<any>{
    //inteval id is used to keep track of the inteval
    let intevalId: any;
    //Create new observable
    return new Observable( observer => {
      //We still need to loop it. So we declare i and we need to assign this to c.
      // Mostly because interval is in another code block and cant access "this"
      let i = 0;
      const c = this;

      intevalId = setInterval(function () {

        //Send out the newly fixed array back to the component
        observer.next(i);

        i= i + addPerTick;
        //Check if we looped the until the biggest word. If yes. We clear the interval and declare that observable is complete
        if(max_count<i){
          clearInterval(intevalId);
          observer.complete();
        }
      }, time);
    });
  }
}
