'use client'

interface GenerateButtonProps {
  onClick: () => void
  disabled: boolean
}

export default function GenerateButton({ onClick, disabled }: GenerateButtonProps) {
  return (
    <button 
      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
      onClick={onClick}
      disabled={disabled}
    >
      Generate Favicons
    </button>
  )
}