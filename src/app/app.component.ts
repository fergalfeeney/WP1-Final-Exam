import { Component ,OnInit } from '@angular/core';
import { MockapiService } from './services/mockapi.service'
import { staffMember } from './interfaceStaff';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';
  results: staffMember[] | undefined;

  constructor(private _mockapi:MockapiService){}
  
  ngOnInit(): void {
    this.getStaff();
  }

  getStaff(): void {
    this._mockapi.getStaffDetails().subscribe(
      staffData => {
        this.results = staffData;
        console.log(this.results);
      }
    );
  }
}
