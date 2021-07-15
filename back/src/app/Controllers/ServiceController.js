
var getService = require('../model/service');
var service = getService();

var array = service;



class ServiceController {
    add(req, res){
		if(array[0] == ''){
			array = []
		}
		if(req.body['id'] != '' && req.body['nome'] != '' && req.body['valor'] != ''){
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
  
  module.exports = new ServiceController();