const SHA256 = require("crypto-js/sha256");


class Block{

	constructor(index, date, data, prev){
		this._id = index ? index : (new Date()).getTime();
		this.ts = date ? new Date(date) : new Date();
		this.data = data;
		this.previousHash = prev;
		this.hash = this.calculateHash();
	}

	calculateHash(){
		return SHA256(this._id + this.ts + JSON.stringify(this.data));
	}


}

module.exports = Block;