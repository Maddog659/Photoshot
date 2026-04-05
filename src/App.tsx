import { useState, useRef, useCallback } from 'react'
import './App.css'
import Toolbar from './components/Toolbar'
import Canvas from './components/Canvas'
import AdjustmentsPanel from './components/AdjustmentsPanel'

function App() {
  const [image, setImage] = useState<HTMLImageElement | null>(null)
  const [adjustments, setAdjustments] = useState({
    brightness: 100,
    contrast: 100,
    saturation: 100,
    blur: 0,
  })

  const canvasRef = useRef<HTMLCanvasElement>(null)

  const handleImageUpload = useCallback((file: File) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      const img = new Image()
      img.onload = () => {
        setImage(img)
      }
      img.src = e.target?.result as string
    }
    reader.readAsDataURL(file)
  }, [])

  const handleAdjustmentChange = useCallback((name: string, value: number) => {
    setAdjustments(prev => ({ ...prev, [name]: value }))
  }, [])

  const handleExport = useCallback(() => {
    if (!canvasRef.current) return
    
    const link = document.createElement('a')
    link.download = 'edited-image.png'
    link.href = canvasRef.current.toDataURL('image/png')
    link.click()
  }, [])

  return (
    <div className="app">
      <header className="app-header">
        <h1>📸 Photoshot</h1>
        <button onClick={handleExport} className="export-btn" disabled={!image}>
          Export Image
        </button>
      </header>
      
      <div className="app-content">
        <Toolbar onImageUpload={handleImageUpload} />
        <Canvas 
          ref={canvasRef} 
          image={image} 
          adjustments={adjustments} 
        />
        <AdjustmentsPanel 
          adjustments={adjustments} 
          onChange={handleAdjustmentChange} 
        />
      </div>
    </div>
  )
}

export default App
