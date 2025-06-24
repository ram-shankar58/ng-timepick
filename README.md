# ⏰ ng-timepick

A **highly customizable, modern Angular time picker component** designed for seamless integration and effortless user experience. `ng-timepick` empowers developers to deliver elegant time selection UIs that blend perfectly with any design system.

---

## ✨ Features

- **12-hour clock face** with AM/PM toggle
- **Manual time input** with validation and error feedback
- **Interactive clock dial** for intuitive hour and minute selection
- **Reactive outputs** for easy integration with forms and parent components
- **Accessible and keyboard-friendly**
- **Fully styleable** via SCSS for effortless theming

---

## 🚀 Installation

```bash
npm install ng-timepick
```

---

## 🛠️ Usage

### 1. Import the Module

Add `NgTimepickModule` to your feature or root module:

```typescript
import { NgTimepickModule } from 'ng-timepick';

@NgModule({
  imports: [
    NgTimepickModule,
    // ...other imports
  ]
})
export class AppModule {}
```

### 2. Add the Component

Insert the time picker in your template:

```html
<lib-ng-timepick
  (timeSelected)="onTimeSelected($event)"
  (timePickerClosed)="onTimePickerClosed()"
></lib-ng-timepick>
```

### 3. Handle Output Events

```typescript
onTimeSelected(time: string) {
  // time is in 'HH:mm' 24-hour format
  console.log('Selected time:', time);
}

onTimePickerClosed() {
  // Handle picker close event
}
```

---

## 🎨 Customization

### Styling

The component uses BEM-inspired SCSS classes for easy customization. Override styles in your global stylesheet or use Angular's `::ng-deep` selector for deep styling.

```scss
::ng-deep .timepicker-container {
  background: #222;
  color: #fff;
  border-radius: 12px;
}
```

### Inputs & Outputs

- **Outputs:**
  - `timeSelected: EventEmitter<string>` — Emits the selected time in `HH:mm` format.
  - `timePickerClosed: EventEmitter<void>` — Emits when the picker is closed (e.g., clicking outside).

---

## 🧩 API Reference

| Output             | Type                  | Description                                 |
|--------------------|----------------------|---------------------------------------------|
| `timeSelected`     | `EventEmitter<string>`| Emits the selected time in `HH:mm` format   |
| `timePickerClosed` | `EventEmitter<void>`  | Emits when the picker is closed             |

---

## 🧪 Testing

Run unit tests with:

```bash
ng test ng-timepick
```

---

## 🏗️ Building

To build the library for distribution:

```bash
ng build ng-timepick
```

The build artifacts will be located in the `dist/ng-timepick/` directory.

---

## 📦 Publishing

After building, publish to npm:

```bash
cd dist/ng-timepick
npm publish
```

---

## 📚 Advanced Usage

- **Reactive Forms Integration:** Use the output events to bind the selected time to your form controls.
- **Dynamic Styling:** Leverage Angular's theming capabilities or CSS variables for runtime style changes.
- **Accessibility:** The component is designed with accessibility in mind, but you can further enhance it as needed.

---

## 📝 License

MIT © [R Ram Shankar](https://github.com/ram-shankar58)

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to check [issues page](https://github.com/ram-shankar58/ng-timepick/issues).

---

## 📎 Links

- [GitHub Repository](https://github.com/ram-shankar58/ng-timepick)
- [Angular CLI Documentation](https://angular.dev/tools/cli)

---

> **ng-timepick** — The elegant Angular time picker for modern web apps.
