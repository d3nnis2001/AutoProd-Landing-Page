import React, { useEffect, useRef, useCallback, useMemo } from 'react'
import { gsap } from 'gsap'
import AutoProdLogo from '../../assets/AutoProdLogo.svg'
import LanguageToggle from '../LanguageToggle'
import { useLanguage } from '../../contexts/LanguageContext'
import type { MenuItem } from '../../types'

interface HomeNavbarProps {
  activeMenu: string
  onMenuClick: (item: MenuItem) => void
  onMobileMenuToggle: () => void
  isMobileMenuOpen: boolean
  isVisible?: boolean
}

const HomeNavbar = React.memo<HomeNavbarProps>(({ 
  activeMenu, 
  onMenuClick, 
  onMobileMenuToggle, 
  isMobileMenuOpen,
  isVisible = true
}) => {
  const { t } = useLanguage()
  // Refs for GSAP animations
  const navbarRef = useRef<HTMLElement>(null)

  // Menu items configuration - memoized for performance
  const menuItems: MenuItem[] = useMemo(() => [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.services, href: '#services' },
    { name: t.nav.workflow, href: '#workflow' },
    { name: t.nav.businessApp, href: '#webapp' },
    { name: t.nav.contact, href: '#contact' }
  ], [t])

  // GSAP animation effect for navbar entrance and visibility
  useEffect(() => {
    const tl = gsap.timeline()

    gsap.set(navbarRef.current, { opacity: 0, y: -50 })

    tl.to(navbarRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      delay: 0.2
    })

    return () => {
      tl.kill()
    }
  }, []) // Empty dependency array = runs once on mount

  // PERFORMANCE: Handle visibility changes with smooth GSAP animations
  useEffect(() => {
    if (!navbarRef.current) return

    if (isVisible) {
      gsap.to(navbarRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power2.out",
        pointerEvents: 'auto'
      })
    } else {
      gsap.to(navbarRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.3,
        ease: "power2.in",
        pointerEvents: 'none'
      })
    }
  }, [isVisible])

  // Optimized click handler to prevent unnecessary re-renders
  const handleMenuClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, item: MenuItem) => {
    e.preventDefault()
    onMenuClick(item)
  }, [onMenuClick])

  return (
    <header ref={navbarRef} className="absolute top-0 left-0 right-0 z-50 px-4 md:px-6 pt-4 md:pt-6 transition-all duration-300">
      <nav className="flex items-center justify-between px-6 py-3 bg-gradient-to-r from-[#0F0F0F] via-[#1A1A1A] to-[#0F0F0F] rounded-xl border border-white/10 shadow-2xl">
        {/* Real SVG Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 flex items-center justify-center">
            <img src={AutoProdLogo} alt="AutoProd Logo" className="w-full h-full" />
          </div>
          <span className="text-lg md:text-xl font-medium text-white">AutoProd</span>
        </div>

        {/* Enhanced Menu with Hover Effects */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-10">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleMenuClick(e, item)}
              className={`text-sm xl:text-base font-normal cursor-pointer transition-colors duration-200 ${
                activeMenu === item.name
                  ? 'text-[#FF763B]'
                  : 'text-white hover:text-[#FF763B]'
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Language Toggle Button */}
        <div className="hidden lg:block">
          <LanguageToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-2"
          onClick={onMobileMenuToggle}
          aria-label="Toggle mobile menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>
    </header>
  )
})

// Performance optimization: Set display name for debugging
HomeNavbar.displayName = 'HomeNavbar'

export default HomeNavbar
export type { HomeNavbarProps }