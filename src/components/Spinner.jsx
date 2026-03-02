import React, { useEffect, useState } from 'react'

const Spinner = () => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    // hide spinner shortly after mount; avoids getting stuck
    const timer = setTimeout(() => setVisible(false), 300)
    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null
  return (
    <div className="spinner-wrapper" id="spinner">
      <div className="spinner"></div>
    </div>
  )
}

export default Spinner
