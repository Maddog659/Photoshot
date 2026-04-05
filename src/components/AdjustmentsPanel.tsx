interface Adjustments {
  brightness: number
  contrast: number
  saturation: number
  blur: number
}

interface AdjustmentsPanelProps {
  adjustments: Adjustments
  onChange: (name: string, value: number) => void
}

export default function AdjustmentsPanel({ adjustments, onChange }: AdjustmentsPanelProps) {
  const handleReset = () => {
    onChange('brightness', 100)
    onChange('contrast', 100)
    onChange('saturation', 100)
    onChange('blur', 0)
  }

  return (
    <div className="adjustments-panel">
      <h2>Adjustments</h2>
      
      <div className="adjustment-group">
        <label>Brightness</label>
        <input
          type="range"
          min="0"
          max="200"
          value={adjustments.brightness}
          onChange={(e) => onChange('brightness', Number(e.target.value))}
        />
        <div className="adjustment-value">{adjustments.brightness}%</div>
      </div>

      <div className="adjustment-group">
        <label>Contrast</label>
        <input
          type="range"
          min="0"
          max="200"
          value={adjustments.contrast}
          onChange={(e) => onChange('contrast', Number(e.target.value))}
        />
        <div className="adjustment-value">{adjustments.contrast}%</div>
      </div>

      <div className="adjustment-group">
        <label>Saturation</label>
        <input
          type="range"
          min="0"
          max="200"
          value={adjustments.saturation}
          onChange={(e) => onChange('saturation', Number(e.target.value))}
        />
        <div className="adjustment-value">{adjustments.saturation}%</div>
      </div>

      <div className="adjustment-group">
        <label>Blur</label>
        <input
          type="range"
          min="0"
          max="20"
          value={adjustments.blur}
          onChange={(e) => onChange('blur', Number(e.target.value))}
        />
        <div className="adjustment-value">{adjustments.blur}px</div>
      </div>

      <button className="reset-btn" onClick={handleReset}>
        Reset All
      </button>
    </div>
  )
}
