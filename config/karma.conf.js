basePath = '../';

files = [
  JASMINE,
  JASMINE_ADAPTER,
  'app/lib/components/angular/angular.js',
  'app/lib/components/angular-bootstrap/ui-bootstrap-tpls.min.js',
  'app/lib/components/underscore/underscore-min.js',
  'test/lib/angular/angular-mocks.js',
  'app/js/**/*.js',
  'test/unit/**/*.js'
];

autoWatch = true;

browsers = ['Chrome'];

junitReporter = {
  outputFile: 'test_out/unit.xml',
  suite: 'unit'
};
