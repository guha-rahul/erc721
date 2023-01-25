// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";//storage for metadata
import "@openzeppelin/contracts/utils/Counters.sol"; //for incrementation

contract MYNFT is ERC721{
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor(string memory _name, string memory _symbol) ERC721(_name,_symbol){}

    function mintNFT(address recipient) public returns(uint256){
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        _safeMint(recipient,newItemId);
        return newItemId;
    }

}

