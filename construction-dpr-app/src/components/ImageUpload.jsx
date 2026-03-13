import { useState } from 'react'
import { toast } from 'flux-toast'

export default function ImageUpload({ 
  onImagesUpdate, // Callback when images change
  maxImages = 3, 
  label = 'Upload Images',
  description = 'Upload images to document progress'
}) {
  // Internal state management - no prop drilling
  const [images, setImages] = useState([])
  const [dragActive, setDragActive] = useState(false)

  const updateImages = (newImages) => {
    setImages(newImages)
    // Notify parent component if callback provided
    if (onImagesUpdate) {
      onImagesUpdate(newImages)
    }
  }

  const handleImageUpload = (files) => {
    if (!files || files.length === 0) return

    const fileArray = Array.from(files)
    const totalImages = images.length + fileArray.length

    if (totalImages > maxImages) {
      toast({
        type: 'error',
        title: 'Upload limit exceeded',
        description: `You can upload maximum ${maxImages} images. You already have ${images.length} selected.`,
      })
      return
    }

    // Validate file types
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif']
    const invalidFiles = fileArray.filter(file => !validTypes.includes(file.type))
    
    if (invalidFiles.length > 0) {
      toast({
        type: 'error',
        title: 'Invalid file type',
        description: 'Please upload only JPEG, PNG, WebP, or GIF images.',
      })
      return
    }

    // Validate file sizes (max 5MB per file)
    const maxSize = 5 * 1024 * 1024 // 5MB
    const oversizedFiles = fileArray.filter(file => file.size > maxSize)
    
    if (oversizedFiles.length > 0) {
      toast({
        type: 'error',
        title: 'File too large',
        description: 'Each image must be smaller than 5MB.',
      })
      return
    }

    updateImages([...images, ...fileArray])
  }

  const removeImage = (index) => {
    const newImages = images.filter((_, i) => i !== index)
    updateImages(newImages)
  }

  const clearAllImages = () => {
    updateImages([])
  }

  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleImageUpload(e.dataTransfer.files)
    }
  }

  const remainingSlots = maxImages - images.length

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
          {label} (Max {maxImages})
        </label>
        {images.length > 0 && (
          <button
            type="button"
            onClick={clearAllImages}
            className="text-xs text-red-600 hover:text-red-800 font-medium"
          >
            Clear All
          </button>
        )}
      </div>
      
      {/* Image Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
        {/* Existing Images */}
        {images.map((img, index) => {
          const imageUrl = img instanceof File ? URL.createObjectURL(img) : img
          
          return (
            <div key={index} className="relative group">
              <div className="w-full h-24 sm:h-32 bg-gray-200 rounded-xl border-2 border-gray-300 overflow-hidden flex items-center justify-center">
                <img
                  src={imageUrl}
                  className="w-full h-full object-cover"
                  alt={`Upload ${index + 1}`}
                  onError={(e) => {
                    console.error('Failed to load image:', img)
                    e.target.style.display = 'none'
                    e.target.parentElement.innerHTML = '<div class="text-gray-500 text-xs">Failed to load</div>'
                  }}
                />
              </div>
              <button
                type="button"
                onClick={() => removeImage(index)}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm hover:bg-red-600 transition-colors shadow-lg z-10"
                aria-label="Remove image"
              >
                ×
              </button>
            </div>
          )
        })}
        
        {/* Upload Slots */}
        {Array.from({ length: remainingSlots }).map((_, index) => (
          <label
            key={`upload-${index}`}
            className={`w-full h-24 sm:h-32 border-2 border-dashed rounded-xl flex flex-col items-center justify-center cursor-pointer transition-all group ${
              dragActive 
                ? 'border-blue-500 bg-blue-50' 
                : 'border-gray-300 hover:border-blue-400 hover:bg-blue-50'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400 group-hover:text-blue-500 mb-1 sm:mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <span className="text-xs sm:text-sm text-gray-500 group-hover:text-blue-600 font-medium text-center px-2">
              Add Photo
            </span>
            <input
              type="file"
              accept="image/*"
              multiple={remainingSlots > 1}
              onChange={(e) => {
                handleImageUpload(e.target.files)
                e.target.value = ''
              }}
              className="hidden"
            />
          </label>
        ))}
      </div>
      
      <p className="text-xs text-gray-500 text-center">
        {description}. Supported formats: JPEG, PNG, WebP, GIF (max 5MB each)
      </p>
      
      {images.length > 0 && (
        <div className="text-xs text-gray-600 text-center">
          {images.length} of {maxImages} images selected
        </div>
      )}
    </div>
  )
}