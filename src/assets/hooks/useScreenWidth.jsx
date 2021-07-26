import { useLayoutEffect, useState } from 'react'

export const useScreenWidth = () => {
  const [width, setWidth] = useState(window.innerWidth)

  useLayoutEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  return width
}
