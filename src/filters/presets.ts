/**
 * Image filters and effects
 */

export type FilterType = 
  | 'grayscale'
  | 'sepia'
  | 'vintage'
  | 'dramatic'
  | 'cool'
  | 'warm'
  | 'fade'
  | 'invert'

export interface Filter {
  id: FilterType
  name: string
  cssFilter: string
}

export const filters: Filter[] = [
  {
    id: 'grayscale',
    name: 'Grayscale',
    cssFilter: 'grayscale(100%)',
  },
  {
    id: 'sepia',
    name: 'Sepia',
    cssFilter: 'sepia(100%)',
  },
  {
    id: 'vintage',
    name: 'Vintage',
    cssFilter: 'sepia(50%) contrast(120%) brightness(90%)',
  },
  {
    id: 'dramatic',
    name: 'Dramatic',
    cssFilter: 'contrast(150%) brightness(90%) saturate(80%)',
  },
  {
    id: 'cool',
    name: 'Cool',
    cssFilter: 'hue-rotate(180deg) saturate(80%)',
  },
  {
    id: 'warm',
    name: 'Warm',
    cssFilter: 'sepia(30%) saturate(140%)',
  },
  {
    id: 'fade',
    name: 'Fade',
    cssFilter: 'brightness(110%) contrast(90%) saturate(80%)',
  },
  {
    id: 'invert',
    name: 'Invert',
    cssFilter: 'invert(100%)',
  },
]

export function applyFilter(ctx: CanvasRenderingContext2D, filter: Filter): void {
  ctx.filter = filter.cssFilter
}

export function combineFilters(baseAdjustments: string, filterCss: string): string {
  return `${baseAdjustments} ${filterCss}`
}
