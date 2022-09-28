// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.17;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract MakeMakesickoNFT is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    event NewMakesickoNFTMInted(address sender, uint256 tokenId);

    constructor() ERC721 ("MakesickoNFT", "MKS") {
        console.log("This is Makesicko NFT contract");
    }

    function makeMakesickoNFT(string memory nftBase64) public {
        uint256 newItemId = _tokenIds.current();

        _safeMint(msg.sender, newItemId);

        console.log("An NFT w/ ID %s has been mintd to %s", newItemId, msg.sender);

        string memory finalTokenUri = string(
            abi.encodePacked("data:application/json;base64,", nftBase64)
        );
        _setTokenURI(newItemId, finalTokenUri);

        _tokenIds.increment();

        emit NewMakesickoNFTMInted(msg.sender, newItemId);
    }
}
