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
    const token = await TokenMock.deployed()
    const bigNumber = web3.utils.toWei('1000', 'ether')
    
    await token.approve(poolAddress, bigNumber, { from: user1 })
    await pool.buyTickets(2, { from: user1 })

    await token.approve(poolAddress, bigNumber, { from: user2 })
    await pool.buyTickets(4, { from: user2 })
  })
};
