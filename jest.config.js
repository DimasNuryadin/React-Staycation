module.exports = {
  transformIgnorePatterns: [
    "/node_modules/(?!(date-fns)/)" // Transpile ES Modules di `node_modules/date-fns`
  ],
};
