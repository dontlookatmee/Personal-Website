import { Routes, RouterModule } from "@angular/router";
import { ContactFormComponent } from "./contact-form/contact-form.component";

const routes: Routes = [
  {
    path: "",
    component: ContactFormComponent,
  },
];

export const ContactRoutingModule = RouterModule.forChild(routes);
