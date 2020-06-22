import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-project-card",
  templateUrl: "./project-card.component.html",
  styleUrls: ["./project-card.component.css"],
})
export class ProjectCardComponent implements OnInit {
  @Input("link") link: string;
  @Input("img") img: string;
  @Input("title") title: string;
  @Input("desc") desc: string;

  constructor() {}

  ngOnInit(): void {}
}
