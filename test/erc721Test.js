/// How to know which scripts will run when we run npx hardhat test
///WHY 11 and 12 for patients record?
/// writing better contracts 

const { expect } = require("chai");
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

    describe("Deployement", function(){
        
        it("Should have the correct name and symbol", async() => {
            const address1=acct.address;
            let tx = await token.mintNFT(address1);
            const receipt = await tx.wait();
            const _arg = receipt.events[0];
            console.log(_arg);
        });
    });
});
