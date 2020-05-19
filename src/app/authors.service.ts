import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthorsService {
  authors = ["Author One", "Author Two", "Author Three"];

  getAuthors = () => {
    console.log("Service authors: " + this.authors);
    return ["Author One", "Author Two", "Author Three"];
    // return "something";
  };

  constructor() {}
}
