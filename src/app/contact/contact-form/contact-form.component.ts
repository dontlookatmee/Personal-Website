import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { EmailService, Email } from "src/app/services/email/email.service";

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
      [
        Validators.required,
        Validators.pattern(
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ),
      ],
    ],
    subject: [
      "",
      [Validators.required, Validators.minLength(3), Validators.maxLength(30)],
    ],
    message: [
      "",
      [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(500),
      ],
    ],
  });
  constructor(private fb: FormBuilder, private emailService: EmailService) {}

  ngOnInit(): void {}

  handleFormSubmit() {
    if (this.contactForm.valid) {
      const email = {
        name: this.contactForm.controls.name.value,
        _replyto: this.contactForm.controls.email.value,
        subject: this.contactForm.controls.subject.value,
        message: this.contactForm.controls.message.value,
      };
      this.emailService.sendEmail(email).subscribe((x) => {
        this.contactForm.reset();
      });
    }
  }
}
