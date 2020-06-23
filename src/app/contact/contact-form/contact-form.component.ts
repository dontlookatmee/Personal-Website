import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.css"],
})
export class ContactFormComponent implements OnInit {
  contactForm = this.fb.group({
    name: [
      "",
      [Validators.required, Validators.minLength(3), Validators.maxLength(30)],
    ],
    email: [
      "",
      [Validators.required, Validators.minLength(3), Validators.maxLength(30)],
    ],
    subject: [
      "",
      [Validators.required, Validators.minLength(3), Validators.maxLength(30)],
    ],
    message: [
      "",
      [Validators.required, Validators.minLength(3), Validators.maxLength(500)],
    ],
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  handleFormSubmit() {
    console.log("clicked");
    console.log(this.contactForm.controls.name.value);
    console.log(this.contactForm.controls.email.value);
    console.log(this.contactForm.controls.subject.value);
    console.log(this.contactForm.controls.message.value);
  }
}
