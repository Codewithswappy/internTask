/**
 * Essential utilities for Construction DPR App
 */

// Date utilities
export const formatDate = (date) => {
  if (!date) return ''
  try {
    return new Date(date).toLocaleDateString()
  } catch {
    return ''
  }
}

export const isDateWithinRange = (date, maxDaysInFuture = 7) => {
  if (!date) return false
  try {
    const selectedDate = new Date(date)
    const maxDate = new Date()
    maxDate.setDate(maxDate.getDate() + maxDaysInFuture)
    return selectedDate <= maxDate
  } catch {
    return false
  }
}

// File utilities
export const formatFileSize = (bytes) => {
  if (!bytes) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

export const isValidFileType = (file, acceptedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']) => {
  return file && acceptedTypes.includes(file.type)
}

// Storage utilities
export const getStorageItem = (key, defaultValue = null) => {
  try {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : defaultValue
  } catch {
    return defaultValue
  }
}

export const setStorageItem = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value))
    return true
  } catch {
    return false
  }
}

// DPR storage functions
export const dprStorage = {
  getReports: () => getStorageItem('dprReports', []),
  saveReport: (report) => {
    const reports = dprStorage.getReports()
    reports.push({ ...report, id: Date.now().toString() })
    return setStorageItem('dprReports', reports)
  }
}

// Validation utilities
export const validateRequired = (value) => {
  if (!value || (typeof value === 'string' && !value.trim())) {
    return 'This field is required'
  }
  return ''
}

export const validateMinLength = (value, minLength) => {
  if (value && value.length < minLength) {
    return `Must be at least ${minLength} characters`
  }
  return ''
}

export const validateMaxLength = (value, maxLength) => {
  if (value && value.length > maxLength) {
    return `Must be no more than ${maxLength} characters`
  }
  return ''
}

export const validateMinValue = (value, minValue) => {
  if (value && parseInt(value) < minValue) {
    return `Must be at least ${minValue}`
  }
  return ''
}

export const validateMaxValue = (value, maxValue) => {
  if (value && parseInt(value) > maxValue) {
    return `Must be no more than ${maxValue}`
  }
  return ''
}

export const validateDateRange = (value, maxDaysInFuture = 7) => {
  if (value && !isDateWithinRange(value, maxDaysInFuture)) {
    return `Date cannot be more than ${maxDaysInFuture} days in the future`
  }
  return ''
}