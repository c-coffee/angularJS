/**
 * Created by vol on 2017/2/22.
 */
var express = require('express');
var app = express();

app.use(express.static("./public"));
app.get("/", function (req, res) {
    setTimeout(function(){
        res.send([
            {
                'mno': Math.ceil(Math.random() * 1000),
                'headpic': 'img/p0281.jpg',
                'price':200.50,
                'title': 'shrimp',
                'content': '美食介绍美食介绍美食介绍美食介绍美食介绍'
            },
            {
                'mno': Math.ceil(Math.random() * 1000),
                'headpic': 'img/p4788.jpg',
                'price':186.00,
                'title': 'noodles',
                'content': '美食介绍美食介绍美食介绍美食介绍美食介绍'
            },
            {
                'mno': Math.ceil(Math.random() * 1000),
                'headpic': 'img/p2679.jpg',
                'price':110.00,
                'title': 'cake',
                'content': '美食介绍美食介绍美食介绍美食介绍美食介绍'
            }
        ]);
    },3000);

});

app.listen(3000);