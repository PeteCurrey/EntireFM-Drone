'use client'

import { usePathname } from 'next/navigation'
import Nav from './Nav'
import Footer from './Footer'
import ProgressDots from './ProgressDots'

export default function PublicLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  
  // Hide main header/nav/footer on admin routes
  const isAdminPath = pathname?.startsWith('/admin')

  if (isAdminPath) {
    return <>{children}</>
  }

  return (
    <>
      <Nav />
      <ProgressDots />
      {children}
      <Footer />
    </>
  )
}
