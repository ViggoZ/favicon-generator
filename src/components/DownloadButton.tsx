'use client'

interface DownloadButtonProps {
  downloadUrl: string
}

export default function DownloadButton({ downloadUrl }: DownloadButtonProps) {
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = downloadUrl
    link.download = 'favicons.zip'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <button 
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
      onClick={handleDownload}
    >
      Download Favicons
    </button>
  )
}