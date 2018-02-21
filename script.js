// var fs = require('fs');
// var MongoClient = require('mongodb').MongoClient;
// var mongoose = require('mongoose');


// var db = mongoose.connection;


//   db.collection('s').findOne(criterio)
//     .then((response) => {

//       if (response) {
//         return Promise.reject('exist');
//       }

//       return db.collection('eventimages').insert(generate)

//     })
//     .then((response) => {
//       return console.log('Insert Schema event image >>>>')
//     })
//     .catch((error) => {
//       // console.log('Exist Schema Event Image')
//     })


// MongoClient.connect('mongodb://localhost:27017/sepomex', function(err, db) {
//     if(err) throw err;



//     fs.readFile('sepomex_abril-2016.json', 'utf8', function (err, data) {
//         if (err) throw err;
//         console.log(data);
//         var json = JSON.parse(data);

//         db.collection('ciudades').insert(json, function (err, doc) {
//             console.log(data);
//             if (err) throw err;
//         });

//     });



// });



// var MongoClient = require('mongodb').MongoClient;

// MongoClient.connect('mongodb://localhost:37017/curso', function(err, db) {
// 	if(err) throw err;

// 	var criterio = { 
// 		'tipo' : 'examen' , 
// 		'puntuacion' : { $gt : 84 , $lt : 86 } 
// 	};

// 	db.collection('puntuaciones').find(criterio).each(function(err, doc) {
// 		if(err) throw err;

// 		if(doc == null) {
// 			return db.close();
// 		}

// 		console.log(doc);
// 	});
// });


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