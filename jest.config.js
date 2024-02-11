module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  transformIgnorePatterns: ['/node_modules/', '/build/'],
  moduleFileExtensions: ['tsx', 'ts', 'jsx', 'js'],
  testPathIgnorePatterns: ['/dist/'],
};
