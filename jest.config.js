module.exports = {
  projects: [
    {
      displayName: 'unit',
      testEnvironment: 'node',
      resetModules: true,
      testMatch: ['<rootDir>/**/*.unit.test.js'],
    },
    {
      displayName: 'component',
      testEnvironment: 'node',
      resetModules: true,
      testMatch: ['<rootDir>/**/*.component.test.js'],
    },
  ],
};
