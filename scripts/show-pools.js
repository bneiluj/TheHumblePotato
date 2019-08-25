const RealPoolManager = artifacts.require('RealPoolManager.sol')

module.exports = function (callback) {

  async function show() {
    try {
      const pm = await RealPoolManager.deployed()
      
      console.log(`PoolManager: ${pm.address}`)

      const PoolCreated = await pm.getPastEvents('PoolCreated', { fromBlock: '0', toBlock: 'latest' })

      PoolCreated.forEach((pc, index) => {
        console.log(`Pool ${index + 1}: ${pc.args.pool}`)
      })

      callback()

    } catch (e) {
      console.error(e)
    }
  }

  show()  
}
