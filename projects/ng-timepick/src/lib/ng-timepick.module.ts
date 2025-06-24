import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgTimepickComponent } from './ng-timepick.component';

@NgModule({
  declarations: [NgTimepickComponent],
  imports: [CommonModule, FormsModule],
  exports: [NgTimepickComponent]
})
export class NgTimepickModule {}