import { Component, OnInit } from "@angular/core";
import { AuthorsService } from "../authors.service";

@Component({
  selector: "app-authors",
  template: `
    <h2>{{ authors.length }} Authors</h2>
    <ul>
      <li *ngFor="let author of authors">
        {{ author }}
      </li>
    </ul>
  `,
  styleUrls: ["./authors.component.scss"],
})
export class AuthorsComponent implements OnInit {
  authors;
  constructor(service: AuthorsService) {
    this.authors = service.getAuthors();
  }

  ngOnInit(): void {}
}
