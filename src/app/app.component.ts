import { Component, OnInit } from '@angular/core';
import { LoaderService } from './common/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Blog';
  public showLoader: boolean = false;

  constructor(private loaderService: LoaderService){
    
  }

  ngOnInit(){
    this.loaderService.status.subscribe(loader => {
      this.showLoader = loader;
    });
  }
}
