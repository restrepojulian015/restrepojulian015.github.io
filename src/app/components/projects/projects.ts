import { Component, inject } from "@angular/core";
import { TranslationService } from "../../services/translation";

@Component({
  selector: "app-projects",
  standalone: true,
  templateUrl: "./projects.html",
  styleUrl: "./projects.css"
})
export class ProjectsComponent {
  translationService = inject(TranslationService);
}
