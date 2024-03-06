# SiteOpsGuardian

A DevOps tool for site monitoring and system information retrieval.

## Installation

To install SiteOpsGuardian in your project, run:


## Usage

To use SiteOpsGuardian, require it in your Node.js application:

```javascript
const SiteOpsGuardian = require('siteopsguardian');

// Check website status
SiteOpsGuardian.checkSiteStatus('https://example.com').then(console.log);

// Ping a host
SiteOpsGuardian.pingHost('example.com').then(console.log).catch(console.error);

// Get system information
console.log(SiteOpsGuardian.getSystemInfo());
