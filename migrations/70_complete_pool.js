const tdr = require('truffle-deploy-registry')
const RealPoolManager = artifacts.require('RealPoolManager.sol')
const TokenMock = artifacts.require('TokenMock.sol')
const RealPool = artifacts.require('RealPool.sol')

module.exports = function(deployer, networkName, accounts) {
  const [owner, admin, user1, user2] = accounts

  if (tdr.isDryRunNetworkName(networkName)) { return }
  deployer.then(async () => {
    const poolManager = await RealPoolManager.deployed()
    const poolAddress = await poolManager.currentPool()
    const pool = await RealPool.at(poolAddress)
    
    let secret = '0x1234123412341234123412341234123412341234123412341234123412341234'

    await pool.complete(secret)
  })
};
