// Google Analytics tracking utility functions

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

// Track button clicks and CTAs
export const trackButtonClick = (buttonName: string, location: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'button_click', {
      event_category: 'engagement',
      event_label: buttonName,
      custom_parameter: location
    });
  }
};

// Track form submissions
export const trackFormSubmission = (formName: string, location: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'form_submit', {
      event_category: 'lead_generation',
      event_label: formName,
      custom_parameter: location
    });
  }
};

// Track page views
export const trackPageView = (pageName: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_title: pageName,
      page_location: window.location.href
    });
  }
};

// Track navigation clicks
export const trackNavigation = (navItem: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'navigation_click', {
      event_category: 'navigation',
      event_label: navItem
    });
  }
};

// Track audit form submission
export const trackAuditSubmission = (websiteUrl: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'audit_request', {
      event_category: 'lead_generation',
      event_label: 'website_audit',
      custom_parameter: websiteUrl
    });
  }
};

// Track consultation request
export const trackConsultationRequest = (service: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'consultation_request', {
      event_category: 'lead_generation',
      event_label: 'consultation',
      custom_parameter: service
    });
  }
};

// Track contact form submission
export const trackContactSubmission = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'contact_form_submit', {
      event_category: 'lead_generation',
      event_label: 'contact_form'
    });
  }
};

// Track pricing page interactions
export const trackPricingInteraction = (plan: string, action: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'pricing_interaction', {
      event_category: 'conversion',
      event_label: action,
      custom_parameter: plan
    });
  }
}; 