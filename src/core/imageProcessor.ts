/**
 * Core image processing utilities
 */

export interface ImageAdjustments {
  brightness: number
  contrast: number
  saturation: number
  blur: number
  exposure: number
  highlights: number
  shadows: number
}

export const defaultAdjustments: ImageAdjustments = {
  brightness: 100,
  contrast: 100,
  saturation: 100,
  blur: 0,
  exposure: 0,
  highlights: 0,
  shadows: 0,
}

export function buildFilterString(adjustments: Partial<ImageAdjustments>): string {
  const {
    brightness = 100,
    contrast = 100,
    saturation = 100,
    blur = 0,
  } = adjustments

  return `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturation}%) blur(${blur}px)`
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}

export function downloadCanvas(canvas: HTMLCanvasElement, filename: string = 'edited-image.png'): void {
  const link = document.createElement('a')
  link.download = filename
  link.href = canvas.toDataURL('image/png')
  link.click()
}

export function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.onerror = reject
    img.src = src
  })
}

export function fileToDataURL(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}
