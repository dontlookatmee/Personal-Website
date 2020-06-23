import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

export interface Email {
  name: string;
  _replyto: string;
  subject: string;
  message: string;
}

@Injectable({
  providedIn: "root",
})
export class EmailService {
  constructor(private http: HttpClient) {}

  sendEmail(emailBody: Email) {
    return this.http.post("https://formspree.io/xdowdvbe", emailBody, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
