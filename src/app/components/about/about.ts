import { Component, inject } from "@angular/core";
import { TranslationService } from "../../services/translation";

@Component({
  selector: "app-about",
  standalone: true,
  templateUrl: "./about.html",
  styleUrl: "./about.css"
})
export class AboutComponent {
  translationService = inject(TranslationService);
}
