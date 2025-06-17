# Locale Picker Component

The LocalePicker component is a customizable React component that allows users to select a locale from a predefined list. This component is designed to be easily integrated into your application and can be registered with Builder.io for use in your projects.

## Installation

To install the LocalePicker component, you can use npm or yarn. Run the following command in your project directory:

```bash
npm install locale-picker-component
```

or

```bash
yarn add locale-picker-component
```

## Usage

To use the LocalePicker component in your application, import it as follows:

```javascript
import { LocalePicker } from 'locale-picker-component';
```

You can then include the LocalePicker in your JSX:

```javascript
<LocalePicker 
  selectedLocale={currentLocale} 
  onLocaleChange={handleLocaleChange} 
/>
```

### Props

- `selectedLocale`: A string representing the currently selected locale.
- `onLocaleChange`: A callback function that is called when the user selects a new locale.

## Registering with Builder.io

To register the LocalePicker component with Builder.io, follow these steps:

1. Go to your Builder.io account.
2. Navigate to the "Components" section.
3. Click on "Add Component" and fill in the details.
4. Use the following code snippet to register the LocalePicker:

```javascript
import { LocalePicker } from 'locale-picker-component';

// Register the component
Builder.registerComponent(LocalePicker, {
  name: 'LocalePicker',
  inputs: [
    { name: 'selectedLocale', type: 'string' },
    { name: 'onLocaleChange', type: 'function' },
  ],
});
```

## License

This project is licensed under the MIT License. See the LICENSE file for more details.