const { MongoClient } = require("mongodb");

module.exports = {
  db: null,
  async connect() {
    try {
      const connection = await MongoClient.connect(
        "mongodb+srv://Saranram:Saran98@cluster0.ratbd.mongodb.net?retryWrites=true&w=majority"
      );
      this.db = connection.db("Pizza");
      console.log("Connection success");
    } catch (err) {
      console.error(err);
    }
  },
};
