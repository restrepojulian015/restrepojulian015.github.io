import { Component, computed, inject } from '@angular/core';
import { TranslationService } from '../../services/translation';
import { CommonModule } from '@angular/common';

type Certificate = {
  title: string;
  issuer: string;
  date: string;
  description: string;
  icon: string;
};

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certificates.html',
  styleUrl: './certificates.css'
})
export class CertificatesComponent {
  translationService = inject(TranslationService);
  currentLanguage = this.translationService.currentLanguage;
  
  // Get certificates from translation service
  certificates = computed<Certificate[]>(() => {
    const items = this.translationService.translate('certificates.items');
    return Array.isArray(items) ? items as Certificate[] : [];
  });
}
