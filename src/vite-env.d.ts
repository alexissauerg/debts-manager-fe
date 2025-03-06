/// <reference types="vite/client" />
declare namespace React {
    interface HTMLAttributes<T> {
      placeholder?: string
      onPointerLeaveCapture?: React.PointerEventHandler<T>
      onPointerEnterCapture?: React.PointerEventHandler<T>
      crossOrigin?: 'anonymous' | 'use-credentials' | ''
    }
  }
  