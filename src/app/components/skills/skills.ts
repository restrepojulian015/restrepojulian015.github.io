import { Component, inject, signal } from "@angular/core";
import { TranslationService } from "../../services/translation";
import { CommonModule } from '@angular/common';

@Component({
  selector: "app-skills",
  standalone: true,
  templateUrl: "./skills.html",
  styleUrl: "./skills.css",
  imports: [CommonModule]
})
export class SkillsComponent {
  translationService = inject(TranslationService);
  currentLanguage = this.translationService.currentLanguage;
}
