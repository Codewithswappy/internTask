import { useNavigate } from "react-router-dom"
import { IconArrowLeft, IconArrowLeftCircleFilled } from "@tabler/icons-react"

export default function BackButton({ to = -1, className = "", children }) {
  const navigate = useNavigate()

  const handleBack = () => {
    if (to === -1) {
      navigate(-1)
    } else {
      navigate(to)
    }
  }

  return (
    <button
      onClick={handleBack}
      className={`inline-flex items-center gap-1 px-4 py-2 text-gray-600 hover:text-gray-900 cursor-pointer transition-colors ${className}`}
    >
      <IconArrowLeft className="w-5 h-5" stroke={2} />
      {children || "Back"}
    </button>
  )
}