import { Component, OnInit } from "@angular/core";
import { SkillsService } from "../../services/skills.service";
import { ProjectsService } from "../../services/projects/projects.service";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.css"],
})
export class HomePageComponent implements OnInit {
  constructor(
    public skillsService: SkillsService,
    public projectService: ProjectsService
  ) {}

  ngOnInit(): void {}
}
