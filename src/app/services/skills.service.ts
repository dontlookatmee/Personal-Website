import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class SkillsService {
  mySkillsImg = [
    {
      name: "HTML",
      size: {
        width: "70%",
        height: "60%",
      },
      img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png",
    },
    {
      name: "CSS",
      size: {
        width: "50%",
        height: "60%",
      },
      img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/363px-CSS3_logo_and_wordmark.svg.png",
    },
    {
      name: "JavaScript",
      size: {
        width: "50%",
        height: "60%",
      },
      img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Javascript-shield.svg/397px-Javascript-shield.svg.png",
    },
    {
      name: "Angular",
      size: {
        width: "70%",
        height: "70%",
      },
      img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/512px-Angular_full_color_logo.svg.png",
    },
    {
      name: "React",
      size: {
        width: "90%",
        height: "70%",
      },
      img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png",
    },
    {
      name: "Bootstrap",
      size: {
        width: "55%",
        height: "55%",
      },
      img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png",
    },
    {
      name: "TypeScript",
      size: {
        width: "80%",
        height: "20%",
      },
      img:
        "https://upload.wikimedia.org/wikipedia/commons/a/a6/TypeScript_Logo.png",
    },
    {
      name: "Firebase",
      size: {
        width: "80%",
        height: "20%",
      },
      img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Firebase_Logo.svg/512px-Firebase_Logo.svg.png",
    },
  ];
  constructor() {}
}
