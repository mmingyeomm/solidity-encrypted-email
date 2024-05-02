// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract email{
    //mail id
    uint256 mailId; 
    //mails by recievers 
    mapping(address => uint256[]) mailReceived; 
    //mails by senders
    mapping(address => uint256[]) mailSent;
    // mail content by id
    mapping(uint256 => string) mailContent; 

    struct Profile{
        address id; 
        string pubkey; 
    }

    mapping(address =>Profile) profiles;

    event sent(address indexed _from, address indexed _to, uint256 indexed _id, string _value );

    function send(address _to, string memory _value) public {
        mailContent[mailId] = _value;
        mailReceived[_to].push(mailId);
        mailSent[msg.sender].push(mailId);
        
        emit sent(msg.sender, _to,mailId, _value);
        mailId++; 
    }

    function setKey(string memory _key) public{
        profiles[msg.sender] = Profile(msg.sender, _key); 
    }

    function getKey(address _address) public view returns(string memory){
        return profiles[_address].pubkey;
    }

    function getNumber() public returns (uint256) {
        return 3;
    }

    function getRecived() public view returns (uint256[] memory){
        return mailReceived[msg.sender];
    }
}
