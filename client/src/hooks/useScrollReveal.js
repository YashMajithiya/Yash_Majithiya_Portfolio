import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('on') }),
      { threshold: 0.08, rootMargin: '0px 0px -48px 0px' }
    )
    document.querySelectorAll('.sr, .sr-l, .sr-r').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
