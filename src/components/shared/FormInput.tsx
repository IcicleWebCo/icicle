import React from 'react';
import { LucideIcon } from 'lucide-react';
import { INPUT_STYLES } from '../../constants/theme';

interface FormInputProps {
  label: string;
  id: string;
  name: string;
  type?: 'text' | 'email' | 'password';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  icon?: LucideIcon;
  minLength?: number;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  id,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
  icon: Icon,
  minLength,
}) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-slate-300 mb-2">
        {label}
      </label>
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
        )}
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          minLength={minLength}
          className={Icon ? INPUT_STYLES.withIcon : INPUT_STYLES.base}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default FormInput;
