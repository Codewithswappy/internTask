export default function Button({ 
  children, 
  disabled = false, 
  loading = false,
  className = "",
  onClick,
  type = "button",
  ...props 
}) {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={`
        px-6 py-3 rounded-xl font-semibold
        bg-black text-white 
        shadow-[0_4px_12px_rgba(0,0,0,0.2)]
        hover:shadow-[0_6px_16px_rgba(0,0,0,0.2)]  
        hover:-translate-y-0.5 
        active:translate-y-0 
        transition-all duration-200
        disabled:bg-gray-400 disabled:shadow-none disabled:transform-none disabled:cursor-not-allowed
        flex items-center justify-center gap-2
        cursor-pointer
        ${className}
      `}
      {...props}
    >
      {loading && (
        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
      )}
      {children}
    </button>
  )
}