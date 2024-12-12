// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract EscrowForGoods {
    address public buyer; // Buyer sends the payment
    address public seller; // Seller receives payment (minus courier fee)
    address public courier; // Courier receives the courier fee
    uint256 public courierFee; // Fee to pay the courier
    uint256 public totalAmount; // Total amount sent by the buyer
    bool public isDelivered; // Tracks if the delivery is confirmed

    event DeliveryConfirmed(address indexed courier, uint256 courierFee, uint256 sellerAmount);
    event DisputeRaised(address indexed buyer);

    constructor(address _seller, address _courier, uint256 _courierFee) payable {
        require(msg.value > _courierFee, "Insufficient funds for courier fee");
        require(_courierFee > 0, "Courier fee must be greater than zero");

        buyer = msg.sender; // The deploying account is the buyer
        seller = _seller; // Set the seller's address
        courier = _courier; // Set the courier's address
        courierFee = _courierFee; // Set the courier fee
        totalAmount = msg.value; // Total funds sent by the buyer
        isDelivered = false; // Delivery status starts as false
    }

    modifier onlyCourier() {
        require(msg.sender == courier, "Only the courier can call this");
        _;
    }

    modifier onlyBuyer() {
        require(msg.sender == buyer, "Only the buyer can call this");
        _;
    }

    function confirmDelivery() external onlyCourier {
        require(!isDelivered, "Delivery already confirmed");
        require(totalAmount > courierFee, "Insufficient funds in escrow");

        isDelivered = true; // Mark the delivery as confirmed

        // Pay the courier fee
        payable(courier).transfer(courierFee);

        // Pay the remaining amount to the seller
        uint256 sellerAmount = totalAmount - courierFee;
        payable(seller).transfer(sellerAmount);

        emit DeliveryConfirmed(courier, courierFee, sellerAmount);
    }

    function raiseDispute() external onlyBuyer {
        require(!isDelivered, "Cannot raise a dispute after delivery");
        emit DisputeRaised(buyer);
        // Add logic for dispute resolution, if needed
    }

    function getContractBalance() external view returns (uint256) {
        return address(this).balance;
    }
}
