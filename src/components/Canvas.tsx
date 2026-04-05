import { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'

interface CanvasProps {
  image: HTMLImageElement | null
  adjustments: {
    brightness: number
    contrast: number
    saturation: number
    blur: number
  }
}

const Canvas = forwardRef<HTMLCanvasElement, CanvasProps>(
  ({ image, adjustments }, ref) => {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useImperativeHandle(ref, () => canvasRef.current!, [])

    useEffect(() => {
      const canvas = canvasRef.current
      if (!canvas || !image) return

      const ctx = canvas.getContext('2d')
      if (!ctx) return

      canvas.width = image.width
      canvas.height = image.height

      ctx.filter = `
        brightness(${adjustments.brightness}%)
        contrast(${adjustments.contrast}%)
        saturate(${adjustments.saturation}%)
        blur(${adjustments.blur}px)
      `

      ctx.drawImage(image, 0, 0)
    }, [image, adjustments])

    if (!image) {
      return (
        <div className="placeholder">
          <span>📷</span>
          <p>No image loaded</p>
          <p>Click "Open" to upload an image</p>
        </div>
      )
    }

    return (
      <div className="canvas-container">
        <canvas ref={canvasRef} />
      </div>
    )
  }
)

export default Canvas
