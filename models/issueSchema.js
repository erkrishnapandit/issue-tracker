const mongoose = require('mongoose');

const issueSchema = new mongoose.Schema({
   //different fields defined for issue
   title: {
      type: String,
      required: true
   },
   description: {
      type: String,
      required: true
   },
   labels: [{
      type: String,
      required: true
   }],
   author: {
      type: String,
      required: true
   },

}, { timestamps: true });

const Issues = mongoose.model('Issues', issueSchema);

module.exports = Issues;