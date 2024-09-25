'use client'

import { useState } from 'react'
import FileUpload from '@/components/FileUpload'
import GenerateButton from '@/components/GenerateButton'
import DownloadButton from '@/components/DownloadButton'

export default function Home() {
  const [file, setFile] = useState<File | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleFileChange = (selectedFile: File | null) => {
    setFile(selectedFile)
    setDownloadUrl(null)
    setError(null)
  }

  const handleGenerate = async () => {
    if (!file) return

    setIsGenerating(true)
    setDownloadUrl(null)
    setError(null)
    const formData = new FormData()
    formData.append('file', file)

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to generate favicons')
      }

      const contentType = response.headers.get('content-type')
      if (contentType && contentType.includes('application/json')) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to generate favicons')
      }

      const blob = await response.blob()
      const url = URL.createObjectURL(blob)
      setDownloadUrl(url)
    } catch (error) {
      console.error('Error generating favicons:', error)
      setError(error instanceof Error ? error.message : 'An unknown error occurred')
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold mb-8">Favicon Generator</h1>
      <FileUpload onFileChange={handleFileChange} />
      <GenerateButton onClick={handleGenerate} disabled={!file || isGenerating} />
      {isGenerating && <p className="mt-4">Generating favicons...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}
      {downloadUrl && <DownloadButton downloadUrl={downloadUrl} />}
    </main>
  )
}