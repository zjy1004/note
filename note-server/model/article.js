var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const article = new mongoose.Schema({
    title: String,
    content: String,
    contentText: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'category'
    },
    readnumber: {
        type: Number,
        default: 0
    },
    commonnum: {
        type: Number,
        default: 0
    }
}, {versionKey: false, timestamps: {createAt: 'createTime', updatedAt: 'updateTime'}});

module.exports = mongoose.model("article", article);