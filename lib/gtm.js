// export const GTM_TRACKING_ID = 'G-X7QNR4S3EN';
export const GTM_TRACKING_ID = 'GTM-W8D8DVL';
export const GOOGLE_ANALYTICS = 'G-X7QNR4S3EN';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  window.gtag('config', GTM_TRACKING_ID, {
    page_path: url,
  });
};

export const pageviewAnalytics = (url) => {
  window.gtag('config', GOOGLE_ANALYTICS, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
