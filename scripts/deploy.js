const {ethers} = require("hardhat");

const main = async() => {
  
  const contract = await ethers.getContractFactory("erc721");
  const token = await contract.deploy("NAME","SYMBOL");

  await token.deployed();
  console.log("Nft deployed at :", token.address);

}

const runMain = async() => {
  try{
    await main();
    process.exit(0);
  }catch(error){
    console.log(error);
    process.exit(1);
  }
} 
runMain();