import { useRef } from 'react'

interface ToolbarProps {
  onImageUpload: (file: File) => void
}

export default function Toolbar({ onImageUpload }: ToolbarProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      onImageUpload(file)
    }
  }

  const handleClick = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className="toolbar">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="file-input"
      />
      
      <button className="toolbar-btn" onClick={handleClick}>
        <span>📁</span>
        <small>Open</small>
      </button>
      
      <button className="toolbar-btn">
        <span>✂️</span>
        <small>Crop</small>
      </button>
      
      <button className="toolbar-btn">
        <span>🔄</span>
        <small>Rotate</small>
      </button>
      
      <button className="toolbar-btn">
        <span>🎨</span>
        <small>Filter</small>
      </button>
      
      <button className="toolbar-btn">
        <span>📝</span>
        <small>Text</small>
      </button>
    </div>
  )
}
