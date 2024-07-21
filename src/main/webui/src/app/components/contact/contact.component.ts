import {Component, OnInit} from '@angular/core';
import {BackendService} from "../../services/backend.service";
import {Observer, Subscription} from "rxjs";
import {NgIf} from "@angular/common";


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
 result: string = " ";

  constructor(private httpService : BackendService) {  }
  hasError: boolean = false;
  errorMessage: string = " ";
  ngOnInit(): void {
    this.httpService.fetchData("/something").subscribe(this.observerData());

  }

  private observerData(): Observer<any>{

    return {
      complete : () => {},
      next: (value) => {
        console.log("Value",value);
        this.result = value;
      },
      error: (error) => {
        console.log("Found Error!!!",error)
        this.hasError = true;
        this.errorMessage = JSON.stringify(error.status);
      }
    }

  }





}
