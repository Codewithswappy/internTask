import { useState } from 'react'

// Simple validation rules
const validationRules = {
  required: (message = 'This field is required') => (value) => {
    if (!value || (typeof value === 'string' && !value.trim())) {
      return message
    }
    return ''
  },

  minLength: (min, message) => (value) => {
    if (value && value.length < min) {
      return message || `Must be at least ${min} characters`
    }
    return ''
  },

  maxLength: (max, message) => (value) => {
    if (value && value.length > max) {
      return message || `Must be no more than ${max} characters`
    }
    return ''
  },

  minValue: (minimum, message) => (value) => {
    if (value && parseInt(value) < minimum) {
      return message || `Must be at least ${minimum}`
    }
    return ''
  },

  maxValue: (maximum, message) => (value) => {
    if (value && parseInt(value) > maximum) {
      return message || `Must be no more than ${maximum}`
    }
    return ''
  },

  dateRange: (maxDaysInFuture, message) => (value) => {
    if (value) {
      const selectedDate = new Date(value)
      const today = new Date()
      const maxDate = new Date()
      maxDate.setDate(today.getDate() + maxDaysInFuture)
      
      if (selectedDate > maxDate) {
        return message || `Date cannot be more than ${maxDaysInFuture} days in the future`
      }
    }
    return ''
  }
}

export const useFormValidation = (initialValues, validationRules) => {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})

  const validateField = (name, value) => {
    const rules = validationRules[name]
    if (!rules) return ''

    for (const rule of rules) {
      const error = rule(value, values)
      if (error) return error
    }
    return ''
  }

  const validateAll = () => {
    const newErrors = {}
    let isValid = true

    Object.keys(validationRules).forEach(field => {
      const error = validateField(field, values[field])
      if (error) {
        newErrors[field] = error
        isValid = false
      }
    })

    setErrors(newErrors)
    return isValid
  }

  const handleChange = (name, value) => {
    setValues(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleBlur = (name) => {
    setTouched(prev => ({ ...prev, [name]: true }))
    const error = validateField(name, values[name])
    setErrors(prev => ({ ...prev, [name]: error }))
  }

  const reset = () => {
    setValues(initialValues)
    setErrors({})
    setTouched({})
  }

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    validateAll,
    reset,
    setValues,
    setErrors
  }
}

// Export validation rules for convenience
export { validationRules }