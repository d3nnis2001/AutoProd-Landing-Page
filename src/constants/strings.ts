export const STRINGS = {
  // Firma & Kontakt
  COMPANY_NAME: 'AutoProd',
  EMAIL: 'contact@autoprod.de',
  PHONE: '+49 1514 0490786',
  ADDRESS_STREET: 'Uelzener Str. 16',
  ADDRESS_CITY: '33719 Bielefeld',
  ADDRESS_COUNTRY_DE: 'Deutschland',
  ADDRESS_COUNTRY_EN: 'Germany',
  
  // Geschäftszeiten
  BUSINESS_HOURS_DE: 'Mo-Fr: 9:00 - 18:00 Uhr',
  BUSINESS_HOURS_EN: 'Mon-Fri: 9:00 AM - 6:00 PM',
  
  // Rechtliche Informationen
  COPYRIGHT: '© 2025 AutoProd. Alle Rechte vorbehalten.',
  COPYRIGHT_EN: '© 2025 AutoProd. All rights reserved.',
  
  // Impressum Daten
  COMPANY_OWNER: 'Dennis Schielke',
  VAT_ID: 'DE123456789',
  ECONOMIC_ID: '12345678901',
  
  // Legal Data für Impressum
  LEGAL_ADDRESS: {
    street: 'Uelzener Str. 16',
    zipCode: '33719',
    city: 'Bielefeld',
    country: 'Deutschland'
  },
  
  // Team Mitglieder
  TEAM: {
    DENNIS: {
      name: 'Dennis Schielke',
      initials: 'DS',
      role_de: 'CTO & Lead Developer',
      role_en: 'CTO & Lead Developer',
      description_de: 'Full-Stack Automation',
      description_en: 'Full-Stack Automation'
    },
    PHILIP: {
      name: 'Philip Lindinger',
      initials: 'PL',
      role_de: 'CFO',
      role_en: 'CFO',
      description_de: 'Finanz & Buchhaltung',
      description_en: 'Finance & Accounting'
    },
    MAX: {
      name: 'David Büchsenschütz',
      initials: 'DB',
      role_de: 'COO & Operations',
      role_en: 'COO & Operations',
      description_de: 'Prozessoptimierung',
      description_en: 'Process Optimization'
    }
  },
  
  // Success Messages
  SUCCESS_MESSAGES: {
    MESSAGE_SENT_DE: 'Nachricht gesendet!',
    MESSAGE_SENT_EN: 'Message sent!',
    RESPONSE_PROMISE_DE: 'Wir melden uns bald bei Ihnen.',
    RESPONSE_PROMISE_EN: 'We will get back to you soon.',
    QUICK_RESPONSE_DE: 'Schnelle Antwort garantiert',
    QUICK_RESPONSE_EN: 'Quick Response Guaranteed',
    RESPONSE_TIME_DE: 'Wir antworten werktags innerhalb von 24 Stunden',
    RESPONSE_TIME_EN: 'We respond within 24 hours on business days'
  },
  
  // Status Indicators
  STATUS: {
    AVAILABLE_DE: 'Verfügbar',
    AVAILABLE_EN: 'Available'
  },
  
  // Footer Taglines
  FOOTER_TAGLINE_DE: 'Transformieren Sie Ihr Business mit maßgeschneiderten Automatisierungslösungen. Von der ersten Idee bis zur finalen Implementierung.',
  FOOTER_TAGLINE_EN: 'Transform your business with tailored automation solutions. From initial idea to final implementation.',
  
  // Footer Links
  FOOTER_FOLLOW_DE: 'Folgen Sie uns:',
  FOOTER_FOLLOW_EN: 'Follow us:',
  BACK_TO_TOP_DE: '↑ Nach oben',
  BACK_TO_TOP_EN: '↑ Back to top',
  
  // Navigation Buttons
  BACK_BUTTON_DE: '← Zurück',
  BACK_BUTTON_EN: '← Back',
  
  // Legal URLs
  EU_DISPUTE_URL: 'https://ec.europa.eu/consumers/odr/',
  
  // Service Items (for footer)
  SERVICE_ITEMS_DE: [
    'Workflow Automation',
    'API Integration', 
    'Custom Development',
    'Support'
  ],
  SERVICE_ITEMS_EN: [
    'Workflow Automation',
    'API Integration',
    'Custom Development', 
    'Support'
  ]
} as const

export type StringKeys = keyof typeof STRINGS