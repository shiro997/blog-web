import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LoaderService{
    public status: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    
    display(value: boolean) {
        try {
            setTimeout(() => {    
            this.status.next(value);
          }, 0);
       
        } catch (e) {
  
        }
    }
}