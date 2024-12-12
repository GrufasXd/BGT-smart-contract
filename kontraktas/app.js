const contractBytecode = "608060405260405162000d6a38038062000d6a8339818101604052810190620000299190620001d6565b8034116200006e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200006590620002fc565b60405180910390fd5b60008111620000b4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000ab906200031e565b60405180910390fd5b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600381905550346004819055506000600560006101000a81548160ff021916908315150217905550505050620003c3565b600081519050620001b9816200038f565b92915050565b600081519050620001d081620003a9565b92915050565b600080600060608486031215620001ec57600080fd5b6000620001fc86828701620001a8565b93505060206200020f86828701620001a8565b92505060406200022286828701620001bf565b9150509250925092565b60006200023b60228362000340565b91507f496e73756666696369656e742066756e647320666f7220636f7572696572206660008301527f65650000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000620002a360258362000340565b91507f436f757269657220666565206d7573742062652067726561746572207468616e60008301527f207a65726f0000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000602082019050818103600083015262000317816200022c565b9050919050565b60006020820190508181036000830152620003398162000294565b9050919050565b600082825260208201905092915050565b60006200035e8262000365565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6200039a8162000351565b8114620003a657600080fd5b50565b620003b48162000385565b8114620003c057600080fd5b50565b61099780620003d36000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c80636daa2d44116100665780636daa2d44146100fc5780636f9fb98a146101065780637150d8ae14610124578063765f744c14610142578063de051d511461016057610093565b806308551a53146100985780631a39d8ef146100b657806350a7f7d3146100d45780635e10177b146100f2575b600080fd5b6100a061017e565b6040516100ad919061078b565b60405180910390f35b6100be6101a4565b6040516100cb9190610861565b60405180910390f35b6100dc6101aa565b6040516100e9919061078b565b60405180910390f35b6100fa6101d0565b005b610104610470565b005b61010e6105b3565b60405161011b9190610861565b60405180910390f35b61012c6105bb565b604051610139919061078b565b60405180910390f35b61014a6105df565b60405161015791906107a6565b60405180910390f35b6101686105f2565b6040516101759190610861565b60405180910390f35b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60045481565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610260576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161025790610841565b60405180910390fd5b600560009054906101000a900460ff16156102b0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102a7906107c1565b60405180910390fd5b600354600454116102f6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102ed90610821565b60405180910390fd5b6001600560006101000a81548160ff021916908315150217905550600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6003549081150290604051600060405180830381858888f1935050505015801561037b573d6000803e3d6000fd5b50600060035460045461038e91906108b6565b9050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f193505050501580156103f8573d6000803e3d6000fd5b50600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f91c4e2bbb437240699cd18f996c76ae5842de42aa9b2cebf234646a2d341e2256003548360405161046592919061087c565b60405180910390a250565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146104fe576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104f5906107e1565b60405180910390fd5b600560009054906101000a900460ff161561054e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161054590610801565b60405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f0b3cd97b16a08a5c77357c276d248827ad32dfd56060f7c55d6255537ba3d96260405160405180910390a2565b600047905090565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600560009054906101000a900460ff1681565b60035481565b610601816108ea565b82525050565b610610816108fc565b82525050565b6000610623601a836108a5565b91507f44656c697665727920616c726561647920636f6e6669726d65640000000000006000830152602082019050919050565b6000610663601c836108a5565b91507f4f6e6c79207468652062757965722063616e2063616c6c2074686973000000006000830152602082019050919050565b60006106a36025836108a5565b91507f43616e6e6f74207261697365206120646973707574652061667465722064656c60008301527f69766572790000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000610709601c836108a5565b91507f496e73756666696369656e742066756e647320696e20657363726f77000000006000830152602082019050919050565b6000610749601e836108a5565b91507f4f6e6c792074686520636f75726965722063616e2063616c6c207468697300006000830152602082019050919050565b61078581610928565b82525050565b60006020820190506107a060008301846105f8565b92915050565b60006020820190506107bb6000830184610607565b92915050565b600060208201905081810360008301526107da81610616565b9050919050565b600060208201905081810360008301526107fa81610656565b9050919050565b6000602082019050818103600083015261081a81610696565b9050919050565b6000602082019050818103600083015261083a816106fc565b9050919050565b6000602082019050818103600083015261085a8161073c565b9050919050565b6000602082019050610876600083018461077c565b92915050565b6000604082019050610891600083018561077c565b61089e602083018461077c565b9392505050565b600082825260208201905092915050565b60006108c182610928565b91506108cc83610928565b9250828210156108df576108de610932565b5b828203905092915050565b60006108f582610908565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fdfea2646970667358221220db6100fd448df467321c0f449201f4a8e9b45414d24baabe8244e6f84610441764736f6c63430008000033";

const contractABI = [ [
	{
		"inputs": [],
		"name": "confirmDelivery",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_seller",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_courier",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_courierFee",
				"type": "uint256"
			}
		],
		"stateMutability": "payable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "courier",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "courierFee",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "sellerAmount",
				"type": "uint256"
			}
		],
		"name": "DeliveryConfirmed",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "buyer",
				"type": "address"
			}
		],
		"name": "DisputeRaised",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "raiseDispute",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "buyer",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "courier",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "courierFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getContractBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "isDelivered",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "seller",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
] ];

let web3;
let contract;
let currentAccount;

// Utility function: Update UI with status
function updateStatus(message) {
  document.getElementById("status").textContent = message;
}

// Connect Wallet
document.getElementById("connectWallet").addEventListener("click", async () => {
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);

    try {
      // Request wallet connection
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      currentAccount = accounts[0];

      updateStatus(`Connected: ${currentAccount}`);

      // Listen for account changes
      window.ethereum.on("accountsChanged", (accounts) => {
        currentAccount = accounts[0];
        updateStatus(`Account changed: ${currentAccount}`);
      });

      // Listen for network changes
      window.ethereum.on("chainChanged", () => {
        window.location.reload(); // Reload page to sync with new chain
      });
    } catch (error) {
      console.error("Error connecting wallet:", error);
      alert("Failed to connect wallet. Please try again.");
    }
  } else {
    alert("MetaMask not detected. Please install MetaMask to use this DApp.");
  }
});

// Deploy Contract
document.getElementById("deployForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  if (!web3) return alert("Please connect your wallet first.");

  const sellerAddress = document.getElementById("sellerAddress").value;
  const courierAddress = document.getElementById("courierAddress").value;
  const courierFee = document.getElementById("courierFee").value;
  const amount = document.getElementById("amount").value;

  // Validate input
  if (!web3.utils.isAddress(sellerAddress) || !web3.utils.isAddress(courierAddress)) {
    return alert("Invalid seller or courier address.");
  }
  if (isNaN(courierFee) || isNaN(amount) || parseFloat(courierFee) <= 0 || parseFloat(amount) <= parseFloat(courierFee)) {
    return alert("Invalid courier fee or total amount.");
  }

  const courierFeeWei = web3.utils.toWei(courierFee, "ether");
  const amountWei = web3.utils.toWei(amount, "ether");

  try {
    // Deploy contract
    const deployedContract = await new web3.eth.Contract(contractABI)
      .deploy({
        data: contractBytecode,
        arguments: [sellerAddress, courierAddress, courierFeeWei],
      })
      .send({
        from: currentAccount,
        value: amountWei,
      });

    document.getElementById("deploymentStatus").textContent = `Contract deployed at: ${deployedContract.options.address}`;
    contract = deployedContract; // Update global contract variable
    console.log("Contract deployed at:", deployedContract.options.address);

    // Store the deployed contract address in localStorage
    localStorage.setItem("deployedContractAddress", deployedContract.options.address);
    alert(`Contract deployed successfully at: ${deployedContract.options.address}`);
  } catch (error) {
    console.error("Error deploying contract:", error);
    alert("Failed to deploy contract. Check the console for details.");
  }
});

// Load Contract
document.getElementById("loadContract").addEventListener("submit", async (e) => {
  e.preventDefault();

  // Fetch the deployed contract address from localStorage
  const savedAddress = localStorage.getItem("deployedContractAddress");
  
  if (savedAddress) {
    if (!web3.utils.isAddress(savedAddress)) {
      return alert("Invalid contract address in storage.");
    }

    // Load the contract using the saved address
    try {
      contract = new web3.eth.Contract(contractABI, savedAddress);
      alert(`Contract loaded successfully at: ${savedAddress}`);
    } catch (error) {
      console.error("Error loading contract:", error);
      alert("Failed to load contract. Check the console for details.");
    }
  } else {
    alert("No deployed contract address found. Please deploy a contract first.");
  }
});

// Confirm Delivery (Courier)
document.getElementById("confirmDelivery").addEventListener("click", async () => {
	if (!contract) return alert("Please deploy or load a contract first.");
	if (!currentAccount) return alert("Please connect your wallet first.");
  
	try {
	  // Fetch the courier's address from the contract
	  const courierAddress = await contract.methods.courier().call();
  
	  // Check if the current account is the courier
	  if (currentAccount.toLowerCase() !== courierAddress.toLowerCase()) {
		alert("You are not the courier. Only the courier can confirm delivery.");
		return;
	  }
  
	  // MetaMask should pop up to confirm the transaction
	  await contract.methods.confirmDelivery().send({ from: currentAccount })
		.on('transactionHash', (hash) => {
		  console.log("Transaction sent: ", hash);
		  updateStatus("Transaction sent. Waiting for confirmation...");
		})
		.on('receipt', (receipt) => {
		  console.log("Transaction confirmed: ", receipt);
		  alert("Delivery confirmed!");
		  updateStatus("Delivery confirmed! Transaction mined.");
		})
		.on('error', (error) => {
		  console.error("Transaction failed: ", error);
		  alert("Error confirming delivery. Check the console for details.");
		});
  
	} catch (error) {
	  console.error("Error confirming delivery:", error);
	  alert("Error confirming delivery. Check the console for details.");
	}
  });

// Raise Dispute (Buyer)
document.getElementById("raiseDispute").addEventListener("click", async () => {
  if (!contract) return alert("Please deploy or load a contract first.");
  if (!currentAccount) return alert("Please connect your wallet first.");

  try {
    await contract.methods.raiseDispute().send({ from: currentAccount });
    alert("Dispute raised!");
  } catch (error) {
    console.error("Error raising dispute:", error);
    alert("Error raising dispute. Check the console for details.");
  }
});

// Get Contract Balance
document.getElementById("getBalance").addEventListener("click", async () => {
  if (!contract) return alert("Please deploy or load a contract first.");
  if (!currentAccount) return alert("Please connect your wallet first.");

  try {
    const balance = await contract.methods.getContractBalance().call();
    document.querySelector("#balanceOutput span").textContent = web3.utils.fromWei(balance, "ether");
  } catch (error) {
    console.error("Error fetching balance:", error);
    alert("Error fetching balance. Check the console for details.");
  }
});