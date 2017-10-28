const Block = require("./Block.js");
const Blockchain = require('./Blockchain.js');

//var init = function(){
	let wf = new Blockchain();

	wf.addBlock(new Block(1, "20/07/2017", { amount: 4 }));
	wf.addBlock(new Block(2, "20/07/2017", { amount: 8 }));

	console.log(wf);
	return wf;
//}

