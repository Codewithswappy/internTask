// Project data constants
export const PROJECTS = [
  {
    id: '1',
    name: 'Highway Expansion Phase 1',
    status: 'Active',
    startDate: '2026-01-10',
    location: 'Mumbai',
    description: 'Major highway expansion project to improve traffic flow',
    contractor: 'ABC Construction Ltd.',
    budget: 50000000
  },
  {
    id: '2', 
    name: 'Residential Tower B',
    status: 'Pending',
    startDate: '2026-02-15',
    location: 'Pune',
    description: '25-story residential complex with modern amenities',
    contractor: 'XYZ Builders Pvt. Ltd.',
    budget: 75000000
  },
  {
    id: '3',
    name: 'Metro Line Extension',
    status: 'Active', 
    startDate: '2025-11-20',
    location: 'Delhi',
    description: 'Extension of metro line to connect suburban areas',
    contractor: 'Metro Construction Corp.',
    budget: 120000000
  },
  {
    id: '4',
    name: 'Bridge Repair Project',
    status: 'Completed',
    startDate: '2025-08-05',
    location: 'Bangalore',
    description: 'Structural repair and maintenance of city bridge',
    contractor: 'Infrastructure Solutions Ltd.',
    budget: 15000000
  },
  {
    id: '5',
    name: 'Shopping Mall Complex',
    status: 'Active',
    startDate: '2025-12-01', 
    location: 'Chennai',
    description: 'Multi-level shopping and entertainment complex',
    contractor: 'Commercial Builders Inc.',
    budget: 90000000
  }
]

// Project status options
export const PROJECT_STATUS = {
  ACTIVE: 'Active',
  PENDING: 'Pending', 
  COMPLETED: 'Completed',
  ON_HOLD: 'On Hold'
}

// Status color mappings
export const STATUS_COLORS = {
  [PROJECT_STATUS.ACTIVE]: 'bg-green-100 text-green-700 border-green-200',
  [PROJECT_STATUS.PENDING]: 'bg-yellow-100 text-yellow-700 border-yellow-200', 
  [PROJECT_STATUS.COMPLETED]: 'bg-blue-100 text-blue-700 border-blue-200',
  [PROJECT_STATUS.ON_HOLD]: 'bg-gray-100 text-gray-700 border-gray-200'
}