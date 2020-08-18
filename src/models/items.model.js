var dbConn = require('./../../config/db.config');

var Item = function(item){
	this.name = item.name;
	this.quantity = item.quantity;
	this.amount = item.amount;
};

Item.create = function (newItem, result) {
	dbConn.query("INSERT INTO items set ?", newItem, function (err, res) {
	if(err) {
	  console.log("error: ", err);
	  result(err, null);
	}else{
	  console.log(res.insertId);
	  result(null, res.insertId);
		}
	});
};

Item.findAll = function (result) {
	dbConn.query("SELECT * from items", function (err, res){
	if(err){
		console.log("error: ", err);
		result(null,err);
	}else{
		console.log("item: ",res)
		result(null,res)
		}
	})
}

Item.findById = function(id, result){
	dbConn.query("SELECT * from items where id = ? ", id, function(err,res){
		if(err){
			console.log("error: ", err);
			result(null, err);
		}else{
			console.log("item: ", res)
			result(null,res)
		}
	})
}

module.exports = Item;