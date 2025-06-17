import React from 'react';

interface LocalePickerProps {
  locales: string[];
  selectedLocale: string;
  onLocaleChange: (locale: string) => void;
}

const LocalePicker: React.FC<LocalePickerProps> = ({ locales, selectedLocale, onLocaleChange }) => {
  return (
    <select value={selectedLocale} onChange={(e) => onLocaleChange(e.target.value)}>
      {locales.map((locale) => (
        <option key={locale} value={locale}>
          {locale}
        </option>
      ))}
    </select>
  );
};

export default LocalePicker;