class Hashtable{
	constructor(size){
		this.dict = Array(size);
	}

	getHash(key){
		return key % this.dict.length;
	}

	set(key, value){
		const hash = this.getHash(key);

		if (this.dict[hash] === undefined) this.dict[hash] = [];

		let list = this.dict[hash],
			item = list.find(item => item.key === key);

		if (item) item.value = value;
		else this.dict[hash].push({key, value});
	}

	lookup(key){
		const hash = this.getHash(key);

		if (this.dict[hash] !== undefined){
			return (this.dict[hash].find(item => item.key === key) || {}).value;
		}
	}

	delete(key){
		const hash = this.getHash(key);

		let list = this.dict[hash];
		if (list){
			const listAfterDeletion = list.filter(item => item.key !== key);
			if (listAfterDeletion.length > 0){
				this.dict[hash] = listAfterDeletion;
			}else{
				delete(this.dict[hash]);
			}
		}
	}
}

let h = new Hashtable(100);
h.set(50, "abc");
h.set(25, "cde");
h.set(50, "fgh");
h.set(8, "hjl");
h.set(150, "mno");
h.set(250, "pqr");
h.delete(50);
h.delete(150);
console.log(h);
console.log(h.lookup(250));
