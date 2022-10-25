module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    "type-enum": [1, "always", ["feat", "fix", "revert"]],
    "subject-max-length": [1, "always", 30],
  },
};
