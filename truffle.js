const path = require("path");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  migrations_directory: "./migrations",
  contracts_build_directory: "./src/contracts",
  networks: {
    develop: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    }
  }
};
