import { Component, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  standalone: false,
  selector: 'lib-ng-timepick',
  templateUrl: './ng-timepick.component.html',
  styleUrls: ['./ng-timepick.component.scss']
})
export class NgTimepickComponent {
  selectedHour = 4;
  selectedMinute = 40;
  isSelectingHour = true;
  meridian: 'AM' | 'PM' = 'PM';
  invalidTimeInput = false;
  manualTimeInput = '04:40';

  @Output() timeSelected = new EventEmitter<string>();
  @Output() timePickerClosed = new EventEmitter<void>();

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement: HTMLElement) {
    const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.emitTime();
    }
  }

  get displayTime(): string {
    return `${this.selectedHour.toString().padStart(2, '0')}:${this.selectedMinute.toString().padStart(2, '0')}`;
  }

  setMeridian(value: 'AM' | 'PM') {
    if (this.meridian !== value) {
      if (value === 'PM' && this.selectedHour < 12) {
        // this.selectedHour += 12;
      } else if (value === 'AM' && this.selectedHour >= 12) {
        this.selectedHour -= 12;
        if (this.selectedHour === 0) {
          this.selectedHour = 12;
        }
      }
      this.meridian = value;
      this.updateManualInput();
    } else {
      this.meridian = value;
      this.updateManualInput();
    }
  }

  selectHour(hour: number) {
    this.selectedHour = hour;
    this.isSelectingHour = false;
    this.updateManualInput();
  }

  selectMinute(min: number) {
    this.selectedMinute = min;
    this.updateManualInput();
    this.emitTime();
  }

  emitTime() {
    let hour = this.selectedHour;
    if (this.meridian === 'PM' && hour < 12) hour += 12;
    if (this.meridian === 'AM' && hour === 12) hour = 0;

    const time = `${hour.toString().padStart(2, '0')}:${this.selectedMinute.toString().padStart(2, '0')}`;
    this.timeSelected.emit(time);
  }

  updateManualInput() {
    this.manualTimeInput = this.displayTime;
  }

  onManualTimeBlur() {
    const regex = /^([01]?\d|2[0-3]):([0-5]\d)$/;
    if (regex.test(this.manualTimeInput)) {
      const [h, m] = this.manualTimeInput.split(':').map(Number);

      if (h === 0) {
        this.selectedHour = 12;
      } else if (h > 12) {
        this.selectedHour = h - 12;
      } else {
        this.selectedHour = h;
      }
      this.selectedMinute = m;
      this.invalidTimeInput = false;
      this.updateManualInput();
      this.emitTime();
    } else {
      this.invalidTimeInput = true;
    }
  }

  restrictManualInput(event: Event) {
    let value = (event.target as HTMLInputElement).value;
    value = value.replace(/[^0-9:]/g, '').slice(0, 5);
    const parts = value.split(':');
    if (parts[0]) parts[0] = parts[0].slice(0, 2);
    if (parts[1]) parts[1] = parts[1].slice(0, 2);

    this.manualTimeInput = parts.join(':');
  }
}