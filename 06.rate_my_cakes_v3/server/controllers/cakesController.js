//  var Cake = require('../models/cake.js');
const mongoose = require("mongoose");
mongoose.set('useFindAndModify', false);

var model = require('../models/cake');
var Cake = model.Cake;

class CakesController {
    create(request, response) {
        Cake.create(request.body, function (error, cake) {
            if (error) {
                response.json({ error: 'Couldnt create', status: 'False' });
            }
            response.json({ data: cake, message: 'Success' });
        }
        );
    }

    getAll(request, response) {
        Cake.find({}, function (error, cakes) {
            if (error) {
                response.json({ error: 'Couldnt fetch all', status: 'False' });
            }
            response.json({ data: cakes, message: "Success" });
        });
    }

    show(request, response) {
        Cake.findOne(
            { _id: request.params.id },
            function(error, cake) {
                if (error) {
                    response.json({ error: "Cake not found !", status: 'False' });
                }
                response.json(
                    {data: cake, message: 'Success'}
                );
            }
        );
    }


    update(request, response) {
        Cake.updateOne(
            { _id: request.body.id },
            { $set: {
                cakeName : request.body.cakeName,
                bakerName: request.body.bakerName,
                imageURL: request.body.imageURL
                }
            },
            (error)=>{
                if (error) {
                    response.json({ error: "Update failed", status: 'False' });
                }
                response.json({status: 'Success update' });
            }
        );
    }

    addReview(request, response) {
     console.log(request.params.id);
     console.log(request.body);
        Cake.updateOne(
            { _id: request.params.id },
            { $push: {
                reviews : {
                    rating: request.body.rating,
                    comment: request.body.comment
                }
            }
            },
            (error, data)=>{
                if (error) {
                    response.json({ error: "Update failed", status: 'False' });
                }
                response.json({status: 'Success update', data });
            }
        );
    }

    deleteReview(request, response) {
        console.log("Cake Id: " + Object(request.params.id));

     	Cake.updateOne(
             {_id : request.params.id},
             {$pull : {
                 reviews : {
                     _id : request.params.reviewId
                    }
                }
            },
            (error, data)=>{
                if (error) {
                    response.json({ error: "Update failed", status: 'False' });
                }
                response.json({status: 'Success update', data });
            }
        );
    }

    destroy(request, response){
        Cake.findOneAndRemove({_id: request.params.id}, function(error){
            if(error){
                response.json({error: "Deletion failed", status: 'False'});
            }
            response.json({message: 'Success delete'});
        });
    }

}

module.exports = new CakesController();