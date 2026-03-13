// Form validation constants
export const VALIDATION_MESSAGES = {
  REQUIRED: 'This field is required',
  MIN_LENGTH: (min) => `Must be at least ${min} characters`,
  MAX_LENGTH: (max) => `Must be no more than ${max} characters`,
  MIN_VALUE: (min) => `Must be at least ${min}`,
  MAX_VALUE: (max) => `Must be no more than ${max}`,
  INVALID_EMAIL: 'Please enter a valid email address',
  INVALID_DATE: 'Please enter a valid date',
  DATE_FUTURE_LIMIT: (days) => `Date cannot be more than ${days} days in the future`
}

// Weather options for DPR form
export const WEATHER_OPTIONS = [
  { value: 'Sunny', label: '☀️ Sunny' },
  { value: 'Cloudy', label: '☁️ Cloudy' },
  { value: 'Rainy', label: '🌧️ Rainy' },
  { value: 'Foggy', label: '🌫️ Foggy' },
  { value: 'Windy', label: '💨 Windy' }
]

// File upload constants
export const FILE_UPLOAD = {
  MAX_SIZE: 5 * 1024 * 1024, // 5MB
  ACCEPTED_TYPES: ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'],
  MAX_FILES: 3
}

// Form field limits
export const FIELD_LIMITS = {
  DESCRIPTION: {
    MIN: 10,
    MAX: 500
  },
  WORKERS: {
    MIN: 1,
    MAX: 1000
  },
  DATE_FUTURE_DAYS: 7
}