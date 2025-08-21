import { Component, inject } from "@angular/core";
import { TranslationService } from "../../services/translation";

@Component({
  selector: "app-hero",
  standalone: true,
  templateUrl: "./hero.html",
  styleUrl: "./hero.css"
})
export class HeroComponent {
  translationService = inject(TranslationService);
}
