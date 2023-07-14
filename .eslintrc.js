module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true, // Add this line to recognize Jest environment
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
  },
  globals: {
    test: "readonly",
    expect: "readonly",
    describe: "readonly", // Add this line to define `describe` as a global variable
  },
};
