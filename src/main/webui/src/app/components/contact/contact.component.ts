import {Component, OnInit} from '@angular/core';
import {BackendService} from "../../services/backend.service";
import {Observer, Subscription} from "rxjs";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {

  constructor(private httpSerice : BackendService) {  }

  ngOnInit(): void {
    this.httpSerice.obtainResponse("/hello").subscribe(this.observerData());

  }

  private observerData(): Observer<any>{

    return {
      next: (value) => console.log(value),
      error: (error) => console.log(error),
      complete: () => console.log("completed  ")
    }

  }





}
