import { Component } from '@angular/core';
import { SingleProjectComponent } from './single-project/single-project.component';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SingleProjectComponent, NgFor, NgClass],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = new Array(4).fill(null);
}
