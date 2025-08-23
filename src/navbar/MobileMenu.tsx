import React, { useCallback, useMemo, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import LanguageToggle from '../components/LanguageToggle'
import { useLanguage } from '../contexts/LanguageContext'

// TypeScript Interfaces
interface MenuItem {
  name: string
  href: string
}

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  onMenuClick: (item: MenuItem) => void
  activeMenu: string
}

const MobileMenu = React.memo<MobileMenuProps>(({ 
  isOpen, 
  onClose, 
  onMenuClick, 
  activeMenu 
}) => {
  const { t } = useLanguage()
  const menuRef = useRef<HTMLDivElement>(null)
  const itemsRef = useRef<(HTMLDivElement | null)[]>([])
  
  // Menu items simplified
  const menuItems: MenuItem[] = useMemo(() => [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.services, href: '#services' },
    { name: t.nav.workflow, href: '#workflow' },
    { name: t.nav.businessApp, href: '#webapp' },
    { name: t.nav.contact, href: '#contact' }
  ], [t])

  const handleMenuClick = useCallback((item: MenuItem) => {
    onClose()
    onMenuClick(item)
  }, [onClose, onMenuClick])

  // Simple fade in animation
  useEffect(() => {
    if (isOpen && menuRef.current) {
      gsap.set(menuRef.current, { opacity: 0 })
      gsap.set(itemsRef.current, { opacity: 0, y: 20 })
      
      gsap.to(menuRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out"
      })
      
      gsap.to(itemsRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.05,
        ease: "power2.out",
        delay: 0.1
      })
    }
  }, [isOpen])

  if (!isOpen) {
    return null
  }

  return (
    <div className="lg:hidden fixed inset-0 z-40 overflow-hidden">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1D1D1D] via-[#0F0F0F] to-[#000000]">
        {/* Simple gradient orbs without animation */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-[#FF763B]/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-[#FFBE56]/5 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div ref={menuRef} className="relative h-full flex flex-col p-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-12 h-12 bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/10"
          aria-label="Close menu"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Menu Items - Centered */}
        <div className="flex-1 flex flex-col justify-center -mt-16">
          <div className="space-y-2">
            {menuItems.map((item, index) => (
              <div
                key={item.name}
                ref={el => { itemsRef.current[index] = el }}
                onClick={() => handleMenuClick(item)}
                className="cursor-pointer"
              >
                <div className={`
                  flex items-center justify-between px-6 py-4 rounded-2xl
                  transition-all duration-200
                  ${activeMenu === item.name
                    ? 'bg-gradient-to-r from-[#FF763B]/20 to-[#FFBE56]/20 border border-[#FF763B]/40'
                    : 'bg-white/5 border border-white/10 hover:bg-white/10'
                  }
                `}>
                  {/* Text Content */}
                  <h3 className={`
                    text-2xl font-semibold transition-colors duration-200
                    ${activeMenu === item.name ? 'text-white' : 'text-white/80'}
                  `}>
                    {item.name}
                  </h3>
                  
                  {/* Arrow */}
                  <svg className={`
                    w-5 h-5 transition-transform duration-200
                    ${activeMenu === item.name ? 'text-[#FF763B]' : 'text-white/30'}
                  `} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section with Language Toggle and Social - Higher positioning */}
        <div className="space-y-6 pb-8">
          {/* Language Toggle */}
          <div className="flex justify-center">
            <LanguageToggle />
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <a href="#" className="w-12 h-12 bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/10 hover:bg-white/10 transition-colors duration-200">
              <svg className="w-5 h-5 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="#" className="w-12 h-12 bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/10 hover:bg-white/10 transition-colors duration-200">
              <svg className="w-5 h-5 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="#" className="w-12 h-12 bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/10 hover:bg-white/10 transition-colors duration-200">
              <svg className="w-5 h-5 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
})

MobileMenu.displayName = 'MobileMenu'

export default MobileMenu
export type { MenuItem, MobileMenuProps }