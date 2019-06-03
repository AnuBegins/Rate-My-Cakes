const mongoose = require("mongoose");
mongoose.set('useFindAndModify', false);

let ReviewSchema  = new mongoose.Schema({
    rating: {
        type: Number,
       // default: '',
        required: true
    },

    comment: {
        type: String,
        required: true,
        minlength: 1
    }
    },
    {timestamps: true}
);

let CakeSchema = new mongoose.Schema({
    cakeName: {
        type: String,
        required: [true, 'Enter a name for your cake'],
        minlength: 3
    },
    bakerName: {
        type: String,
        required: [true, 'Enter the name of the baker'],
        minlength: 2
    },
    imageURL: {
        type: String,
        required: true
    },
    reviews: [ReviewSchema]
},
    {timestamps: true}
);

var Cake        = mongoose.model('Cake', CakeSchema);
var Review      = mongoose.model('Review', ReviewSchema);

module.exports  = {Cake: Cake, Review: Review};
// module.exports  = {Cake: Cake };

// module.exports = mongoose.model("Review", ReviewSchema);



