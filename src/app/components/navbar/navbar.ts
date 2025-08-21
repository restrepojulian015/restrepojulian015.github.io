import { Component, inject } from "@angular/core";
import { TranslationService } from "../../services/translation";

@Component({
  selector: "app-navbar",
  standalone: true,
  templateUrl: "./navbar.html",
  styleUrl: "./navbar.css"
})
export class NavbarComponent {
  translationService = inject(TranslationService);
}
