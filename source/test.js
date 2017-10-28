'use strict'

let class User {
	constructor(name) {
		this.name = name;
	}
	get userName() {
		console.log(this.name);
	}
}

export default User