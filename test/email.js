
const { expect } = require("chai")
const { ethers } = require("hardhat")

describe("Email", () => {

    let email
    let deployer, buyer

    beforeEach(async () => {
      [deployer, buyer] = await ethers.getSigners()
  
      const Email = await ethers.getContractFactory("email")
      email = await Email.deploy()
      console.log("TokenMaster address:" + deployer.address);

      const transaction = await email.connect(deployer).setKey("12345")
      await transaction.wait()
    })
  
  
    describe("Deployment", () => {
      it("Sets the owner", async() => {
        expect(await email.owner()).to.equal(deployer.address)
      })
      
      it("Sets the owner", async() => {
        expect(await email.getKey(deployer.address)).to.equal("12345")
      })
     
    
      it("Get name", async() => {
        expect(await email.getNumber()).to.equal(3)
      })
    })
  
  
  })