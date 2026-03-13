// Application constants
export const APP_CONFIG = {
  NAME: 'Construction DPR App',
  VERSION: '1.0.0',
  DESCRIPTION: 'Daily Progress Report Management System'
}

// Route paths
export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  PROJECTS: '/projects',
  DPR_FORM: '/dpr/:projectId',
  DPR_CREATE: '/dpr'
}

// Local storage keys
export const STORAGE_KEYS = {
  DPR_REPORTS: 'dprReports',
  USER_PREFERENCES: 'userPreferences',
  AUTH_TOKEN: 'authToken'
}

// Toast notification types
export const TOAST_TYPES = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info'
}

// Breakpoints for responsive design
export const BREAKPOINTS = {
  SM: '640px',
  MD: '768px', 
  LG: '1024px',
  XL: '1280px'
}

// Animation durations
export const ANIMATIONS = {
  FAST: '150ms',
  NORMAL: '300ms',
  SLOW: '500ms'
}