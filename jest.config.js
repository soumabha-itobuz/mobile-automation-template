

module.exports = {
  // global timeout 
  testTimeout: 500000,
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/src/**/*.(spec|test).[tj]s?(x)'],
  moduleFileExtensions: ['ts', 'js', 'json', 'node']
};
