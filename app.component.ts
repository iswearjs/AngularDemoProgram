import { Component,Input, HostListener, Inject } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myfirstapp';
  constructor(@Inject(MyserviceService)myserviceService){
    console.log(myserviceService);
    console.log("hi, this is componet");
  }
  @HostListener('click', ['$event'])
  onhostclick(event:Event)
  {
    alert("Hello");
  }
}
