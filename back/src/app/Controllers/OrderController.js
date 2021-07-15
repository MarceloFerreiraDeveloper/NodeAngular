
var getOrder = require('../model/order');
var order = getOrder();

var array = order;
class OrderController {
    add(req, res){
		if(array[0] == ''){
			array = []
		}
		if(req.body['id'] != '' &&req.body['servico'] != '' && req.body['imposto'] != '' && req.body['instrutor'] != '' && req.body['preco'] != '' && req.body['horas'] != ''){

			array.push(req.body)
			
		  }
    }
  
    show(req, res) {
		return res.status(200).json({
			error: false,
			array
      	})
    }


	showId(req, res) {
		array.filter(element => element.id === req.params.id).map(resp=>{
			return res.status(200).json({
				error: false,
				resp
			})
		})
    }

  
  }
  
  module.exports = new OrderController();