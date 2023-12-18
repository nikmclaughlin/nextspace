'use client'

import { useEffect } from 'react'

export default function ErrorUsers({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div>
      <h2>Uh Oh! Something went wrong.</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}
