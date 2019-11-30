const base = {
  dialect: "postgres",
  dialectModule: require("pg"),
  operatorsAliases: false
};

const config = {
  development: {
    ...base,
    username: "dylan",
    password: null,
    database: "scoot_development",
    host: "127.0.0.1"
  },
  test: {
    ...base,
    username: "root",
    password: null,
    database: "scoot_test",
    host: "127.0.0.1"
  },
  production: {
    ...base,
    username: "root",
    password: null,
    database: "scoot_production",
    host: "127.0.0.1"
  }
};

module.exports = config;
