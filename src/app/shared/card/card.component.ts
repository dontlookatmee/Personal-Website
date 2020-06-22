import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent implements OnInit {
  @Input("image") image: string;
  @Input("content") content: boolean = false;
  @Input("mediaTitle") mediaTitle: string;
  @Input("mediaSubtitle") mediaSubtitle: string;
  @Input("contentText") contentText: string;
  @Input("date") date: string;

  constructor() {}

  ngOnInit(): void {}
}
