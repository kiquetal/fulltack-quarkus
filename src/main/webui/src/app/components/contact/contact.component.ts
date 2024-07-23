import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {BackendService} from "../../services/backend.service";
import {Observer} from "rxjs";
import {NgForOf, NgIf} from "@angular/common";
import {MatList, MatListItem} from "@angular/material/list";


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    NgIf,
    MatList,
    MatListItem,
    NgForOf
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
 result: string = " ";

  constructor(private httpService : BackendService) {  }
  hasError: boolean = false;
  errorMessage: string = " ";
  projects: string[] = [];
  ngOnInit(): void {
    this.httpService.fetchData("/api/projects").subscribe(this.observerData());

  }

  private observerData(): Observer<any>{

    return {
      complete : () => {},
      next: (value) => {

       console.log("Value-from-server",value);
//       const correctedValue = value.replace(/'/g, '"');
  //     this.projects = JSON.parse(correctedValue)["projects"];
      this.projects = JSON.parse(value)["projects"];
       console.log("Projects",this.projects);
      },
      error: (error) => {
        console.log("Found Error!!!",error)
        this.hasError = true;
        this.errorMessage = JSON.stringify(error.status);
      }
    }

  }





}
