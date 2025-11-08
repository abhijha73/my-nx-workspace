import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lib-daisy',
  imports: [CommonModule],
  templateUrl: './daisy.html',
  styleUrl: './daisy.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaisyComponent {}
