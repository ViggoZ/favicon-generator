'use client'

import { useState } from 'react'

interface FileUploadProps {
  onFileChange: (file: File | null) => void
}

export default function FileUpload({ onFileChange }: FileUploadProps) {
  const [fileName, setFileName] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    onFileChange(file)
    setFileName(file ? file.name : null)
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    const file = e.dataTransfer.files?.[0] || null
    onFileChange(file)
    setFileName(file ? file.name : null)
  }

  return (
    <div className="mb-4" onDragOver={handleDragOver} onDrop={handleDrop}>
      <label className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
        Choose File
        <input type="file" onChange={handleFileChange} accept="image/*" className="hidden" />
      </label>
      {fileName && <p className="mt-2">Selected file: {fileName}</p>}
    </div>
  )
}