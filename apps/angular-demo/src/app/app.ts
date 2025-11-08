import { DaisyComponent } from 'ng-daisy-abhi';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  imports: [DaisyComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'angular-with-nx';
}
