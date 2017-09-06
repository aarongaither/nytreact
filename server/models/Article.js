const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  article_id: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true,
    unique: true
  },
  url: {
    type: String,
    required: true
  },
  date_published: {
    type: String,
    required: true
  },
  created_at : {
    type: Date, 
    default: Date.now
  }
});

ArticleSchema.statics.findOneOrCreate = function(articleNew) {
  return this.findOne({article_id: articleNew.article_id}).then(doc => {
    if (!doc) {
      return this.create(articleNew)
    } else {
      return doc
    }
  })
}

module.exports = mongoose.model("Article", ArticleSchema);