#!/usr/bin/env node

// Mobile Responsiveness Testing Script
// This script tests the website's mobile responsiveness and performance

const puppeteer = require('puppeteer');
const fs = require('fs').promises;
const path = require('path');

// Mobile device configurations
const MOBILE_DEVICES = [
  {
    name: 'iPhone 12 Pro',
    width: 390,
    height: 844,
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Mobile/15E148 Safari/604.1'
  },
  {
    name: 'Samsung Galaxy S21',
    width: 360,
    height: 780,
    userAgent: 'Mozilla/5.0 (Linux; Android 11; SAMSUNG SM-G991B) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/14.2 Chrome/87.0.4280.141 Mobile Safari/537.36'
  },
  {
    name: 'iPad Pro',
    width: 1024,
    height: 1366,
    userAgent: 'Mozilla/5.0 (iPad; CPU OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Mobile/15E148 Safari/604.1'
  }
];

// Test URLs
const TEST_URLS = [
  '/',
  '/categories',
  '/tools',
  '/blog',
  '/search',
  '/chatbot',
  '/pricing'
];

// Performance thresholds
const PERFORMANCE_THRESHOLDS = {
  loadTime: 3000, // 3 seconds
  firstContentfulPaint: 2000, // 2 seconds
  largestContentfulPaint: 2500, // 2.5 seconds
  cumulativeLayoutShift: 0.1, // CLS score
  firstInputDelay: 100 // 100ms
};

async function runMobileTests() {
  console.log('🚀 Starting Mobile Responsiveness Tests...\n');
  
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const results = {
    summary: {},
    details: []
  };
  
  try {
    for (const device of MOBILE_DEVICES) {
      console.log(`📱 Testing on ${device.name}...`);
      
      const page = await browser.newPage();
      await page.setUserAgent(device.userAgent);
      await page.setViewport({
        width: device.width,
        height: device.height,
        isMobile: true,
        hasTouch: true
      });
      
      const deviceResults = {
        device: device.name,
        urlResults: []
      };
      
      for (const url of TEST_URLS) {
        console.log(`  🔍 Testing ${url}...`);
        
        try {
          // Navigate to the page
          const startTime = Date.now();
          await page.goto(`http://localhost:3000${url}`, {
            waitUntil: 'networkidle0',
            timeout: 30000
          });
          const loadTime = Date.now() - startTime;
          
          // Get performance metrics
          const metrics = await page.evaluate(() => {
            // Get paint timing metrics
            const paintEntries = performance.getEntriesByType('paint');
            const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
            const lcp = paintEntries.find(entry => entry.name === 'largest-contentful-paint');
            
            // Get layout shift metrics
            const layoutShiftEntries = performance.getEntriesByType('layout-shift');
            const cls = layoutShiftEntries.reduce((total, entry) => total + entry.value, 0);
            
            // Get navigation timing
            const navEntries = performance.getEntriesByType('navigation');
            const navEntry = navEntries[0];
            
            return {
              loadTime: navEntry ? navEntry.loadEventEnd - navEntry.fetchStart : loadTime,
              firstContentfulPaint: fcp ? fcp.startTime : null,
              largestContentfulPaint: lcp ? lcp.startTime : null,
              cumulativeLayoutShift: cls,
              firstInputDelay: null // Would require user interaction simulation
            };
          });
          
          // Check for mobile-specific issues
          const mobileIssues = await page.evaluate(() => {
            const issues = [];
            
            // Check for horizontal scrolling
            if (document.documentElement.scrollWidth > window.innerWidth) {
              issues.push('Horizontal scrolling detected');
            }
            
            // Check for touch target sizes
            const smallTouchTargets = Array.from(document.querySelectorAll('button, a, input')).filter(el => {
              const rect = el.getBoundingClientRect();
              return rect.width < 44 || rect.height < 44;
            });
            
            if (smallTouchTargets.length > 0) {
              issues.push(`${smallTouchTargets.length} small touch targets found`);
            }
            
            // Check for viewport issues
            const viewportMeta = document.querySelector('meta[name="viewport"]');
            if (!viewportMeta) {
              issues.push('Missing viewport meta tag');
            }
            
            return issues;
          });
          
          // Take screenshot
          const screenshotPath = path.join(__dirname, '..', 'test-results', `${device.name.replace(/\s+/g, '_')}_${url.replace(/\//g, '_') || 'home'}.png`);
          await fs.mkdir(path.dirname(screenshotPath), { recursive: true });
          await page.screenshot({ path: screenshotPath, fullPage: true });
          
          const urlResult = {
            url,
            metrics,
            issues: mobileIssues,
            screenshot: screenshotPath,
            passed: (
              metrics.loadTime <= PERFORMANCE_THRESHOLDS.loadTime &&
              (!metrics.firstContentfulPaint || metrics.firstContentfulPaint <= PERFORMANCE_THRESHOLDS.firstContentfulPaint) &&
              (!metrics.largestContentfulPaint || metrics.largestContentfulPaint <= PERFORMANCE_THRESHOLDS.largestContentfulPaint) &&
              metrics.cumulativeLayoutShift <= PERFORMANCE_THRESHOLDS.cumulativeLayoutShift &&
              mobileIssues.length === 0
            )
          };
          
          deviceResults.urlResults.push(urlResult);
          
          console.log(`    ✅ Load Time: ${metrics.loadTime}ms`);
          console.log(`    ✅ FCP: ${metrics.firstContentfulPaint || 'N/A'}ms`);
          console.log(`    ✅ LCP: ${metrics.largestContentfulPaint || 'N/A'}ms`);
          console.log(`    ✅ CLS: ${metrics.cumulativeLayoutShift}`);
          console.log(`    ✅ Issues: ${mobileIssues.length}`);
          console.log(`    ✅ Status: ${urlResult.passed ? 'PASS' : 'FAIL'}\n`);
          
        } catch (error) {
          console.error(`    ❌ Error testing ${url}:`, error.message);
          
          deviceResults.urlResults.push({
            url,
            error: error.message,
            passed: false
          });
        }
      }
      
      results.details.push(deviceResults);
      
      // Calculate device summary
      const totalTests = deviceResults.urlResults.length;
      const passedTests = deviceResults.urlResults.filter(r => r.passed).length;
      results.summary[device.name] = {
        total: totalTests,
        passed: passedTests,
        failed: totalTests - passedTests,
        passRate: ((passedTests / totalTests) * 100).toFixed(2) + '%'
      };
      
      await page.close();
    }
    
    // Generate report
    await generateReport(results);
    
    console.log('✅ Mobile testing completed!');
    console.log('\n📊 Summary:');
    for (const [device, summary] of Object.entries(results.summary)) {
      console.log(`  ${device}: ${summary.passRate} (${summary.passed}/${summary.total})`);
    }
    
  } catch (error) {
    console.error('❌ Error during mobile testing:', error);
  } finally {
    await browser.close();
  }
}

async function generateReport(results) {
  const reportPath = path.join(__dirname, '..', 'test-results', 'mobile-test-report.json');
  await fs.mkdir(path.dirname(reportPath), { recursive: true });
  await fs.writeFile(reportPath, JSON.stringify(results, null, 2));
  
  // Generate HTML report
  const htmlReportPath = path.join(__dirname, '..', 'test-results', 'mobile-test-report.html');
  const htmlContent = generateHTMLReport(results);
  await fs.writeFile(htmlReportPath, htmlContent);
  
  console.log(`\n📄 Detailed report saved to: ${reportPath}`);
  console.log(`🌐 HTML report saved to: ${htmlReportPath}`);
}

function generateHTMLReport(results) {
  return `
<!DOCTYPE html>
<html>
<head>
  <title>Mobile Responsiveness Test Report</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 20px; background: #f5f5f5; }
    .container { max-width: 1200px; margin: 0 auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
    h1 { color: #333; text-align: center; }
    .summary { display: flex; justify-content: space-around; margin: 30px 0; }
    .summary-item { text-align: center; padding: 20px; background: #f8f9fa; border-radius: 8px; }
    .summary-number { font-size: 2em; font-weight: bold; color: #007bff; }
    .summary-label { color: #666; }
    .device-section { margin: 30px 0; padding: 20px; border: 1px solid #ddd; border-radius: 8px; }
    .device-header { font-size: 1.5em; font-weight: bold; color: #333; margin-bottom: 15px; }
    .url-result { margin: 15px 0; padding: 15px; border-left: 4px solid #007bff; background: #f8f9fa; }
    .url-header { font-weight: bold; color: #333; }
    .metrics { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px; margin: 10px 0; }
    .metric { padding: 8px; background: #e9ecef; border-radius: 4px; }
    .issues { color: #dc3545; }
    .passed { color: #28a745; }
    .failed { color: #dc3545; }
  </style>
</head>
<body>
  <div class="container">
    <h1>📱 Mobile Responsiveness Test Report</h1>
    
    <div class="summary">
      ${Object.entries(results.summary).map(([device, summary]) => `
        <div class="summary-item">
          <div class="summary-number">${summary.passRate}</div>
          <div class="summary-label">${device}</div>
          <div>${summary.passed}/${summary.total} tests passed</div>
        </div>
      `).join('')}
    </div>
    
    ${results.details.map(deviceResult => `
      <div class="device-section">
        <div class="device-header">${deviceResult.device}</div>
        ${deviceResult.urlResults.map(urlResult => `
          <div class="url-result">
            <div class="url-header">${urlResult.url} - <span class="${urlResult.passed ? 'passed' : 'failed'}">${urlResult.passed ? 'PASS' : 'FAIL'}</span></div>
            ${urlResult.error ? `<div class="issues">Error: ${urlResult.error}</div>` : `
              <div class="metrics">
                <div class="metric">Load Time: ${urlResult.metrics.loadTime}ms</div>
                <div class="metric">FCP: ${urlResult.metrics.firstContentfulPaint || 'N/A'}ms</div>
                <div class="metric">LCP: ${urlResult.metrics.largestContentfulPaint || 'N/A'}ms</div>
                <div class="metric">CLS: ${urlResult.metrics.cumulativeLayoutShift.toFixed(4)}</div>
              </div>
              ${urlResult.issues.length > 0 ? `<div class="issues">Issues: ${urlResult.issues.join(', ')}</div>` : ''}
            `}
          </div>
        `).join('')}
      </div>
    `).join('')}
  </div>
</body>
</html>
  `;
}

// Run tests if script is executed directly
if (require.main === module) {
  runMobileTests().catch(console.error);
}

module.exports = { runMobileTests };