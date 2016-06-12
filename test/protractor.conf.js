exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['e2e/*.js'],
  baseUrl: 'http://localhost:8080'
};

// seleniumAddress indicates the URL at which the Selenium server can be found.
// specs lists patterns that match the names of your test files.
// baseUrl indicates the URL at which you are serving your Angular application.
