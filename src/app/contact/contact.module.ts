import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { ContactRoutingModule } from "./contact-routing.module";
import { ContactFormComponent } from "./contact-form/contact-form.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [ContactFormComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class ContactModule {}
