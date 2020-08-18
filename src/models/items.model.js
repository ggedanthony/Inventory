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


module.exports = Item;