exports.config = {
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['test/e2e/**/*.js'],
  baseUrl: 'http://localhost:9000/',
  capabilities: {
    browserName: 'phantomjs',
    version: '',
    platform: 'ANY'
  }
}
