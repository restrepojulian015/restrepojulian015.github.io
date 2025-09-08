import { Component, inject, signal } from "@angular/core";
import { TranslationService } from "../../services/translation";
import { CommonModule } from '@angular/common';

@Component({
  selector: "app-contact",
  standalone: true,
  templateUrl: "./contact.html",
  styleUrl: "./contact.css",
  imports: [CommonModule]
})
export class ContactComponent {
  translationService = inject(TranslationService);
  currentLanguage = this.translationService.currentLanguage;
}
