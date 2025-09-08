import { Component, inject, signal } from "@angular/core";
import { TranslationService } from "../../services/translation";
import { CommonModule } from '@angular/common';

@Component({
  selector: "app-hero",
  standalone: true,
  templateUrl: "./hero.html",
  styleUrl: "./hero.css",
  imports: [CommonModule]
})
export class HeroComponent {
  translationService = inject(TranslationService);
  currentLanguage = this.translationService.currentLanguage;
}
