import { Component, inject } from "@angular/core";
import { TranslationService } from "../../services/translation";

@Component({
  selector: "app-contact",
  standalone: true,
  templateUrl: "./contact.html",
  styleUrl: "./contact.css"
})
export class ContactComponent {
  translationService = inject(TranslationService);
}
