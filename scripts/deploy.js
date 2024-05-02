const hre = require("hardhat")

const tokens = (n) => {
    return ethers.utils.parseUnits(n.toString(), 'ether')
}


async function main() {
    // Setup accounts & variables
    const [deployer] = await ethers.getSigners()

  
    // Deploy contract
    const Email = await ethers.getContractFactory("email")
    const email = await Email.deploy()
    await email.waitForDeployment();
  
    console.log(`Deployed TokenMaster Contract at: ${email.target}\n`)
  

    const pubkey = "aaa";
   
    const transaction = await email.connect(deployer).setKey(pubkey)
    
    await transaction.wait()
    
}

  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });