// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
contract GameItemNFT is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    constructor() ERC721("CustomERC721", "CE721") {
        _tokenIds.increment();
    }

    string private _baseURIString = "http://localhost:8085/products/json/";

    function _baseURI() internal view virtual override returns (string memory) {
        return _baseURIString;
    }


    function ExtendedMint(address artist, string memory tokenURI)
        public
        returns (uint256)
    {
        uint256 newItemId = _tokenIds.current();
        _mint(artist, newItemId);
        _setTokenURI(newItemId, tokenURI);
        _tokenIds.increment();
        return newItemId;
    }

    function totalSupply() public view
        returns (uint256){
        return _tokenIds.current();
    }
}
