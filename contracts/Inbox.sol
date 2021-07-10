pragma solidity ^0.4.17;

contract Inbox {
    
    
    // with public key words solidity make a free function to get value
    string public message;
    
    function Inbox(string initialMessage) public {
        message = initialMessage;
    }
    
    function setMessage(string newMessage) public {
        message = newMessage;
    }
    
    // this is redundant
    //function getMessage() public view returns (string) {
        //return message;
    //}
    
    //function doMath(int a, int b) {
        //a + b;
        //b - a;
        //a * b;
        //a == 0;
    //}
    
}