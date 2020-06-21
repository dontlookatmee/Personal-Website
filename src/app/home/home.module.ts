import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomePageComponent } from "./home-page/home-page.component";
import { HomeRoutingModule } from "./home.routing.module";
import { CoreModule } from "../core/core.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, HomeRoutingModule, CoreModule, SharedModule],
})
export class HomeModule {}
