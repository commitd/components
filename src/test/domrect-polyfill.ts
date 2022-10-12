class DOMRectPolyfill implements DOMRect {
  static fromRect(
    rect: { x?: number; y?: number; width?: number; height?: number } = {}
  ) {
    return new this(rect.x ?? 0, rect.y ?? 0, rect.width ?? 0, rect.height ?? 0)
  }

  constructor(
    public x = 0,
    public y = 0,
    public width = 0,
    public height = 0
  ) {}

  get top() {
    return this.y
  }

  get right() {
    return this.x + this.width
  }

  get bottom() {
    return this.y + this.height
  }

  get left() {
    return this.x
  }

  // But it has a toJSON that does include all the properties.
  toJSON() {
    return {
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height,
      top: this.top,
      right: this.right,
      bottom: this.bottom,
      left: this.left,
    }
  }
}

if (typeof window !== 'undefined' && !window.DOMRect) {
  ;(window as { DOMRect: typeof DOMRect }).DOMRect = DOMRectPolyfill
}
