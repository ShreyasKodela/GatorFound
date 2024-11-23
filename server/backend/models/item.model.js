import mongoose from 'mongoose';

const ItemSchema = new mongoose.Schema({
    itemName: {
        type: String,
        required:  true,
        max: 50,
    },
    itemDescription: {
        type: String,
        min: 0,
        max: 200,
    },
    postType: {
        type: String,   // false = lost, true = found
    },
    itemLocation: {
        type: String,  // Text or image
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
    },
    itemPhoto: {
        type: String,   // URL to image
    },
}, {
    timestamps: true
});  

const Item = mongoose.model('Item', ItemSchema);
export default Item;

//A2hQrSpgt2avZmbd
