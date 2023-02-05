
const { expect } =  require("chai");
const { ethers } = require("hardhat");

describe("nft contract", function(){
  let contract;
  let token;
  let _name = "NAME";
  let _symbol = "SYMBOL";
  let acct;
  
  beforeEach(async() => {
    contract = await ethers.getContractFactory("MYNFT");
    [acct] = await ethers.getSigners();
    token = await contract.deploy(_name,_symbol);
  });
  describe("Deployment", function(){
  
    it("Should have the correct name and symbol", async () =>{
      expect(await token.name()).to.equal(_name);
      expect(await token.symbol()).to.equal(_symbol);
    });
  
    it("Should mint a token with token ID 1 & 2 to account1", async() => {
      const address1=acct.address;
      await token.mintNFT(address1);
      expect(await token.ownerOf(1)).to.equal(address1);

      await token.mintNFT(address1);
      expect(await token.ownerOf(2)).to.equal(address1);

      expect(await token.balanceOf(address1)).to.equal(2);      
    });
  });

});
