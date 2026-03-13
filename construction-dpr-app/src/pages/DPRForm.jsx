import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "flux-toast"
import { IconNote } from "@tabler/icons-react"

import { PROJECTS, WEATHER_OPTIONS, FIELD_LIMITS } from "../constants"
import { useFormValidation, validationRules } from "../hooks/useFormValidation"
import { FormInput, FormSelect, FormTextarea } from "../components/FormComponents"
import BackButton from "../components/backButton"
import Button from "../components/button"
import ImageUpload from "../components/ImageUpload"
import { dprStorage } from "../utils"

// Form validation rules using organized utilities
const dprValidationRules = {
  projectId: [
    validationRules.required('Please select a project')
  ],
  date: [
    validationRules.required('Date is required'),
    validationRules.dateRange(FIELD_LIMITS.DATE_FUTURE_DAYS, 'Date cannot be more than 7 days in the future')
  ],
  weather: [
    validationRules.required('Please select weather condition')
  ],
  description: [
    validationRules.required('Work description is required'),
    validationRules.minLength(FIELD_LIMITS.DESCRIPTION.MIN, 'Description must be at least 10 characters'),
    validationRules.maxLength(FIELD_LIMITS.DESCRIPTION.MAX, 'Description cannot exceed 500 characters')
  ],
  workers: [
    validationRules.required('Worker count is required'),
    validationRules.minValue(FIELD_LIMITS.WORKERS.MIN, 'Worker count must be greater than 0'),
    validationRules.maxValue(FIELD_LIMITS.WORKERS.MAX, 'Worker count seems unrealistic (max 1000)')
  ]
}

// Project options from constants
const getProjectOptions = () => 
  PROJECTS.map(project => ({
    value: project.id,
    label: project.name
  }))

export default function DPRForm() {
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [uploadedImages, setUploadedImages] = useState([]) // Store images from ImageUpload

  // Initialize form validation
  const {
    values,
    errors,
    handleChange,
    handleBlur,
    validateAll,
    reset
  } = useFormValidation(
    {
      projectId: '',
      date: '',
      weather: '',
      description: '',
      workers: ''
    },
    dprValidationRules
  )

  // Handle image updates from ImageUpload component
  const handleImagesUpdate = (images) => {
    setUploadedImages(images)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validate form
    if (!validateAll()) {
      toast({
        type: 'error',
        title: 'Please fix the errors',
        description: 'Check all required fields and correct any validation errors.',
      })
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Create DPR data object
      const dprData = {
        ...values,
        projectName: PROJECTS.find(p => p.id === values.projectId)?.name,
        workers: parseInt(values.workers),
        images: uploadedImages.map(img => img.name),
        submittedAt: new Date().toISOString(),
        id: Date.now().toString()
      }

      // Store using utility function
      dprStorage.saveReport(dprData)

      // Success toast
      toast({
        type: 'success',
        title: 'DPR Submitted Successfully! ✅',
        description: `Report for ${dprData.projectName} on ${new Date(values.date).toLocaleDateString()} has been saved.`,
      })

      // Reset form and images
      reset()
      setUploadedImages([])

      // Navigate after success
      setTimeout(() => {
        navigate('/projects')
      }, 2000)

    } catch {
      toast({
        type: 'error',
        title: 'Submission Failed',
        description: 'Failed to submit DPR. Please try again.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen px-4 py-6 sm:py-8">
      <div className="max-w-xl mx-auto">
        {/* Back Button */}
        <div className="mb-4 sm:mb-6">
          <BackButton to="/projects" className="text-sm ">
            Back to Projects
          </BackButton>
        </div>

        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Daily Progress Report
          </h1>
          <p className="text-sm sm:text-base text-gray-600">
            Record today's construction progress
          </p>
        </div> 

        {/* Form Card */}
        <div className="bg-white shadow-md shadow-black/10 ring-1 ring-black/10 p-4 sm:p-8 border border-dashed border-gray-200 rounded-sm">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            {/* Project Selection */}
            <FormSelect
              label="Project"
              name="projectId"
              value={values.projectId}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.projectId}
              options={getProjectOptions()}
              placeholder="Choose a project"
              required
            />

            {/* Date and Weather Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <FormInput
                label="Date"
                name="date"
                type="date"
                value={values.date}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.date}
                required
              />

              <FormSelect
                label="Weather"
                name="weather"
                value={values.weather}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.weather}
                options={WEATHER_OPTIONS}
                placeholder="Select weather condition"
                required
              />
            </div>

            {/* Work Description */}
            <FormTextarea
              label="Work Description"
              name="description"
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.description}
              placeholder="Describe the work completed today... (minimum 10 characters)"
              maxLength={500}
              required
            />

            {/* Worker Count */}
            <FormInput
              label="Worker Count"
              name="workers"
              type="number"
              min="1"
              max="1000"
              value={values.workers}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.workers}
              placeholder="Number of workers present"
              required
            />

            {/* Photo Upload */}
            <ImageUpload
              onImagesUpdate={handleImagesUpdate}
              maxImages={3}
              label="Progress Photos"
              description="Upload up to 3 photos to document today's progress"
            />

            {/* Submit Button */}
            <div className="flex justify-end pt-4 sm:pt-6">
              <Button
                type="submit"
                loading={isSubmitting}
                className="w-full sm:w-auto"
              >
                {isSubmitting ? (
                  "Submitting..."
                ) : (
                  <>
                    <IconNote className="w-4 h-4" />
                    Submit Report
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}