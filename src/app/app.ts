import { Component, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NavbarComponent } from "./components/navbar/navbar";
import { HeroComponent } from "./components/hero/hero";
import { AboutComponent } from "./components/about/about";
import { SkillsComponent } from "./components/skills/skills";
import { ProjectsComponent } from "./components/projects/projects";
import { CertificatesComponent } from "./components/certificates/certificates";
import { ContactComponent } from "./components/contact/contact";
import { FooterComponent } from "./components/footer/footer";
import { LanguageSwitcherComponent } from "./components/language-switcher/language-switcher";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    CertificatesComponent,
    ContactComponent,
    FooterComponent,
    LanguageSwitcherComponent
  ],
  templateUrl: "./app.html",
  styleUrl: "./app.css"
})
export class App {
  protected readonly title = signal("Mi Portafolio");
}
