import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-inicio",
  templateUrl: "./inicio.component.html",
  styleUrls: ["./inicio.component.css"],
})
export class InicioComponent implements OnInit {
  books: Array<any>;
  selectedBook: string;

  constructor() {
    this.books = [
      { name: "Book1", author: "Author1" },
      { name: "Book2", author: "Author2" },
      { name: "Book3", author: "Author3" },
      { name: "Book4", author: "Author4" },
      { name: "Book5", author: "Author5" },
      { name: "Libro1", author: "Author1" },
      { name: "Libro2", author: "Author2" },
      { name: "Libro3", author: "Author3" },
      { name: "Libro4", author: "Author4" },
      { name: "Libro5", author: "Author5" },
    ];
  }

  ngOnInit() {}

  bookSelected(event) {
    console.log(event.name);
  }
}
