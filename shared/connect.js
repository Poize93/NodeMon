const {MongoClient} = require('mongodb')

module.exports={
    selectedDB:{},
    async connect(){
        try{
            // const client =await MongoClient.connect('mongodb://localhost:27017') 
           const client =await MongoClient.connect('mongodb+srv://Rahul:admin2022@cluster0.c8wpk.mongodb.net/?retryWrites=true&w=majority') 
            this.selectedDB=client.db('test');
            console.log(this.selectedDB)
        }catch(err){
            console.log(err)
        }
    }
}





// mongodb+srv://Rahul:admin2022@cluster0.c8wpk.mongodb.net/test /// for connecting with MongoCompass


// mongodb+srv://Rahul:admin2022@cluster0.c8wpk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority // for Node.js