import { useNavigate } from "react-router-dom"
import { STATUS_COLORS } from "../constants"

export default function ProjectCard({ project }) {
  const navigate = useNavigate()

  const handleCardClick = () => {
    navigate(`/dpr/${project.id}`)
  }

  return (
    <div 
      className="bg-white rounded-sm shadow-sm shadow-black/10 ring-1 ring-black/20 hover:shadow-md transition-all duration-200 cursor-pointer group w-full"
      onClick={handleCardClick}
    >
      <div className="p-4 sm:p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-3 sm:mb-4 gap-2">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight flex-1 min-w-0">
            <span className="block truncate">{project.name}</span>
          </h3>
          <span
            className={`text-xs px-2 sm:px-3 py-1 rounded-full border border-dashed flex-shrink-0 ${STATUS_COLORS[project.status]}`}
          >
            {project.status}
          </span>
        </div>

        {/* Project Details */}
        <div className="space-y-2 text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
          <div className="flex items-center gap-2">
            <svg className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="truncate">Start: {new Date(project.startDate).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="truncate">Location: {project.location}</span>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500 hidden sm:block">
            Click to open DPR form
          </span>
          <span className="text-xs text-gray-500 sm:hidden">
            Tap to open DPR
          </span>
          <div className="flex items-center gap-1 sm:gap-2 text-blue-600 group-hover:text-blue-700 transition-colors">
            <span className="text-xs sm:text-sm font-medium">Open DPR</span>
            <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
