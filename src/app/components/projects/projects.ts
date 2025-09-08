import { Component, inject, signal, computed } from "@angular/core";
import { TranslationService } from "../../services/translation";
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  tech: string[];
  codeUrl: string;
  demoUrl: string;
}

@Component({
  selector: "app-projects",
  standalone: true,
  templateUrl: "./projects.html",
  styleUrl: "./projects.css",
  imports: [CommonModule]
})
export class ProjectsComponent {
  translationService = inject(TranslationService);
  currentLanguage = this.translationService.currentLanguage;
  
  // Get projects from translation service
  projects = computed<Project[]>(() => {
    const items = this.translationService.translate('projects.items');
    return Array.isArray(items) ? items as Project[] : [];
  });
}
