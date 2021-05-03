import { useEffect } from 'react'
import { useRouter } from 'next/router'

export function redirectToHome(): void {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 3000)
  }, [])
}
