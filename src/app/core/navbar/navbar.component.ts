import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  handleMenuClick(menu: HTMLDivElement, burger: HTMLAnchorElement) {
    menu.classList.toggle("is-active");
    burger.classList.toggle("is-active");
  }
}
