var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var fs = require('fs');

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");


    fs.readFile('sepomex_abril-2016.json', 'utf8', function (err, data) {
        if (err) throw err;
        console.log(data);
        var json = JSON.parse(data);

        dbo.collection("ciudades").insert(json, function (err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            db.close();
        });

    });

});