import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ScrollDownComponent } from "./scroll-down/scroll-down.component";
import { CardComponent } from "./card/card.component";
import { ProjectCardComponent } from "./project-card/project-card.component";
import { RouterModule } from "@angular/router";
import { FooterComponent } from "./footer/footer.component";

@NgModule({
  declarations: [
    ScrollDownComponent,
    CardComponent,
    ProjectCardComponent,
    FooterComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    ScrollDownComponent,
    CardComponent,
    ProjectCardComponent,
    FooterComponent,
  ],
})
export class SharedModule {}
