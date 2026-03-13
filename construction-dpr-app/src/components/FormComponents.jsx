// Form Input Component
export const FormInput = ({ 
  label, 
  name, 
  type = 'text', 
  value, 
  onChange, 
  onBlur, 
  error, 
  placeholder, 
  required = false,
  className = '',
  ...props 
}) => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        onBlur={() => onBlur && onBlur(name)}
        placeholder={placeholder}
        className={`w-full border-2 rounded-sm px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:ring-0 outline-0 transition-colors ${
          error ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-gray-400'
        } ${className}`}
        {...props}
      />
      {error && (
        <p className="text-red-500 text-sm flex items-center gap-1">
          {error}
        </p>
      )}
    </div>
  )
}

// Form Select Component
export const FormSelect = ({ 
  label, 
  name, 
  value, 
  onChange, 
  onBlur, 
  error, 
  options, 
  placeholder = 'Select an option',
  required = false,
  className = '',
  ...props 
}) => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        name={name}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        onBlur={() => onBlur && onBlur(name)}
        className={`w-full border-2 rounded-sm px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:ring-0 outline-0 transition-colors ${
          error ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-gray-400'
        } ${className}`}
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="text-red-500 text-sm flex items-center gap-1">
          {error}
        </p>
      )}
    </div>
  )
}

// Form Textarea Component
export const FormTextarea = ({ 
  label, 
  name, 
  value, 
  onChange, 
  onBlur, 
  error, 
  placeholder,
  required = false,
  rows = 4,
  maxLength,
  className = '',
  ...props 
}) => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        name={name}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        onBlur={() => onBlur && onBlur(name)}
        placeholder={placeholder}
        rows={rows}
        maxLength={maxLength}
        className={`w-full border-2 rounded-sm px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:ring-0 outline-0 transition-colors resize-none ${
          error ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-gray-400'
        } ${className}`}
        {...props}
      />
      <div className="flex justify-between items-center">
        {error ? (
          <p className="text-red-500 text-sm flex items-center gap-1">
          {error}
          </p>
        ) : (
          <span></span>
        )}
        {maxLength && (
          <span className={`text-xs ${
            value.length > maxLength * 0.9 ? 'text-red-500' : 
            value.length > maxLength * 0.8 ? 'text-yellow-500' : 'text-gray-400'
          }`}>
            {value.length}/{maxLength}
          </span>
        )}
      </div>
    </div>
  )
}

// Error Message Component
export const ErrorMessage = ({ message }) => {
  if (!message) return null
  
  return (
    <p className="text-red-500 text-sm flex items-center gap-1">
      {message}
    </p>
  )
}