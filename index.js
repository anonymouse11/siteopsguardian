const axios = require('axios');
const os = require('os');
const { exec } = require('child_process');

class SiteOpsGuardian {
  static async checkSiteStatus(url) {
    try {
      await axios.get(url);
      return `${url} is up!`;
    } catch (error) {
      return `${url} could not be reached.`;
    }
  }

  static pingHost(host) {
    return new Promise((resolve, reject) => {
      exec(`ping ${host} -c 4`, (error, stdout, stderr) => {
        if (error) return reject(`Ping failed: ${stderr}`);
        resolve(stdout.trim());
      });
    });
  }

  static getSystemInfo() {
    return {
      platform: os.platform(),
      release: os.release(),
      uptime: os.uptime(),
      totalMem: os.totalmem(),
      freeMem: os.freemem(),
      cpus: os.cpus().length
    };
  }
}

module.exports = SiteOpsGuardian;
