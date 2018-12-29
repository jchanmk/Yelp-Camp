var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

// var data = [
//     {
//         name: "Cloud's Rest", 
//         image:"https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//         description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam reiciendis similique libero porro eaque, perspiciatis et? Molestiae dolore nisi rem nobis magni. Et quia excepturi itaque vero inventore illum incidunt debitis ipsum nostrum obcaecati iste dolores illo temporibus maiores doloremque, ipsa, odio unde consequatur placeat laborum suscipit cum vel? Natus autem necessitatibus ipsa reiciendis aspernatur quis quae numquam porro at."
//     },
//     {
//         name: "Lake dope", 
//         image:"https://www.citrusmilo.com/yosemiteguide/cloudsrest01.jpg",
//         description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam reiciendis similique libero porro eaque, perspiciatis et? Molestiae dolore nisi rem nobis magni. Et quia excepturi itaque vero inventore illum incidunt debitis ipsum nostrum obcaecati iste dolores illo temporibus maiores doloremque, ipsa, odio unde consequatur placeat laborum suscipit cum vel? Natus autem necessitatibus ipsa reiciendis aspernatur quis quae numquam porro at."
//     },
//     {
//         name: "Symmetry", 
//         image:"https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//         description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam reiciendis similique libero porro eaque, perspiciatis et? Molestiae dolore nisi rem nobis magni. Et quia excepturi itaque vero inventore illum incidunt debitis ipsum nostrum obcaecati iste dolores illo temporibus maiores doloremque, ipsa, odio unde consequatur placeat laborum suscipit cum vel? Natus autem necessitatibus ipsa reiciendis aspernatur quis quae numquam porro at."
//     }
// ]

function seedDB(){
    // remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campground!");
          // add a few campgrouonds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err);
                }
                else{
                    console.log("added a campground");
                    // create a comment
                    Comment.create(
                        {
                            text: "This place is greate, but I wish there was internet",
                            author: "Homer"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            }
                            else{
                                campground.comments.push(comment);
                                campground.save();
                                console.log("created new comment");
                            }
                        });
                }
            })
        });
    });

    // add a few comments
}

module.exports = seedDB;
