import { Component, OnInit, OnDestroy } from '@angular/core';
import { StatusService } from './status.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Wefox - Carles Rius Challenge';
  alertMessage = '';
  statusSubscription: any;

  constructor(private statusService: StatusService) {
  }

  ngOnInit() {
    this.statusSubscription = this.statusService.message.subscribe((msg: string) => {
      this.alertMessage = msg;
      console.log(this.alertMessage);
    });
  }

  ngOnDestroy() {
    this.statusSubscription.unsubscribe();
  }
}
