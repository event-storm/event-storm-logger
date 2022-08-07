module.exports = {
  release: {
    branches: ['main', 'dev'],
    plugins: [
      '@semantic-release/commit-analyzer',
      '@semantic-release/release-notes-generator',
      '@semantic-release/github',
    ],
  },
};
