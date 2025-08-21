import { Component, inject } from "@angular/core";
import { TranslationService } from "../../services/translation";

@Component({
  selector: "app-language-switcher",
  standalone: true,
  templateUrl: "./language-switcher.html",
  styleUrl: "./language-switcher.css"
})
export class LanguageSwitcherComponent {
  translationService = inject(TranslationService);

  switchLanguage() {
    this.translationService.switchLanguage();
  }
}
