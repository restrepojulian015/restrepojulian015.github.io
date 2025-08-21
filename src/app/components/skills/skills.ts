import { Component, inject } from "@angular/core";
import { TranslationService } from "../../services/translation";

@Component({
  selector: "app-skills",
  standalone: true,
  templateUrl: "./skills.html",
  styleUrl: "./skills.css"
})
export class SkillsComponent {
  translationService = inject(TranslationService);
}
