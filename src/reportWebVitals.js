const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS,getFID,getFCP,getLCP,getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    })
  }
}

export default reportWebVitals;
// Web vitals is an initiative by Google to provide unified guidance for quality signals that are essential to delivering a great user on the web.

// LCP: Largest Contentful Paint(Loading)
// FID: First Input Delay(Interactivity)
// CLS: Cumulative Layout Shift(Visual Stability)
// FCP: First Contentful Paint(Page Load Speed)
// TTFB: Time to first byte(Amount of time from when a client makes an HTTP request)