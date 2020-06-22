import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ScrollDownComponent } from "./scroll-down/scroll-down.component";
import { CardComponent } from "./card/card.component";

@NgModule({
  declarations: [ScrollDownComponent, CardComponent],
  imports: [CommonModule],
  exports: [ScrollDownComponent, CardComponent],
})
export class SharedModule {}
