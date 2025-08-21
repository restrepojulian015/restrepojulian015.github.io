import { Component, inject } from "@angular/core";
import { TranslationService } from "../../services/translation";

@Component({
  selector: "app-certificates",
  standalone: true,
  templateUrl: "./certificates.html",
  styleUrl: "./certificates.css"
})
export class CertificatesComponent {
  translationService = inject(TranslationService);
}
