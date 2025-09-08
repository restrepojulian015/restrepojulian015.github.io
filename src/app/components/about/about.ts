import { Component, inject, signal } from "@angular/core";
import { TranslationService } from "../../services/translation";
import { CommonModule } from '@angular/common';

@Component({
  selector: "app-about",
  standalone: true,
  templateUrl: "./about.html",
  styleUrl: "./about.css",
  imports: [CommonModule]
})
export class AboutComponent {
  translationService = inject(TranslationService);
  currentLanguage = this.translationService.currentLanguage;
}
