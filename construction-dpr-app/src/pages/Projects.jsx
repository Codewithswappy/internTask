import { useState } from "react"
import { PROJECTS } from "../constants"
import ProjectCard from "../components/projectCard"

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("All")

  // Get unique statuses for filter dropdown
  const statuses = ["All", ...new Set(PROJECTS.map(project => project.status))]

  // Filter projects based on search term and status
  const filteredProjects = PROJECTS.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "All" || project.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Construction Projects
          </h1>
          <p className="text-sm sm:text-base text-gray-600">
            Click on any project to open DPR form
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white rounded-sm shadow-sm shadow-black/10 ring-1 ring-black/10 p-4 sm:p-6 mb-6">
          <div className="space-y-4 sm:space-y-0 sm:flex sm:gap-4">
            {/* Search Input */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search Projects
              </label>
              <div className="relative">
                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search by name or location..."
                  className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-200 rounded-sm focus:ring-2 focus:ring-gray-400 focus:border-transparent outline-0 transition-colors"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Status Filter */}
            <div className="sm:w-48">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Filter by Status
              </label>
              <select
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-200 rounded-sm focus:ring-2 focus:ring-gray-400 focus:border-transparent outline-0 transition-colors"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                {statuses.map(status => (
                  <option key={status} value={status}>
                    {status} {status !== "All" && `(${PROJECTS.filter(p => p.status === status).length})`}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Summary */}
        <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs sm:text-sm text-gray-600 px-1">
          <span>
            Showing {filteredProjects.length} of {PROJECTS.length} projects
          </span>
          {(searchTerm || statusFilter !== "All") && (
            <button
              onClick={() => {
                setSearchTerm("")
                setStatusFilter("All")
              }}
              className="text-blue-600 hover:text-blue-800 font-medium text-left sm:text-right"
            >
              Clear filters
            </button>
          )}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-8 sm:py-12 px-4">
            <div className="w-16 h-16 sm:w-24 sm:h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 sm:w-12 sm:h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2">
              No projects found
            </h3>
            <p className="text-sm sm:text-base text-gray-500 mb-4">
              Try adjusting your search terms or filters
            </p>
            <button
              onClick={() => {
                setSearchTerm("")
                setStatusFilter("All")
              }}
              className="text-sm sm:text-base text-blue-600 hover:text-blue-800 font-medium"
            >
              Show all projects
            </button>
          </div>
        )}
      </div>
    </div>
  )
}