import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class FooterComponent {
  translationService = inject(TranslationService);
  currentYear = new Date().getFullYear();
  currentLanguage = this.translationService.currentLanguage;
}
