import { Injectable } from "@angular/core";

interface Project {
  name: string;
  description: string;
  image: string;
  link: string;
}

@Injectable({
  providedIn: "root",
})
export class ProjectsService {
  projects: Project[] = [
    {
      name: "ConnectValve",
      description:
        "Collaboration app. Technologies: Angular, RxJs, Firebase, Bootstrap",
      image: "../../../assets/project-card/ConnectValve.png",
      link: "https://connectvalve.firebaseapp.com/",
    },
    {
      name: "StreamMotion",
      description:
        "Stream app. Technologies: Angular, RxJs, Firebase, Bootstrap",
      image: "../../../assets/project-card/StreamMotion.png",
      link: "https://streammotion-18f8d.web.app/",
    },
    {
      name: "Pokemon",
      description: "Pokemon fight game. Technologies: Vanilla JavaScript OOP",
      image: "../../../assets/project-card/pokemon.png",
      link: "https://github.com/dontlookatmee/PokemonGame",
    },
    {
      name: "GithubFinder",
      description: "Github user finder. Technologies: React, Axios",
      image: "../../../assets/project-card/GithubFinder.png",
      link: "https://gihubfinder00.netlify.app/",
    },
  ];
  constructor() {}
}
