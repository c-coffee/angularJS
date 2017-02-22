/**
 * Created by vol on 2017/2/22.
 */
var express = require('express');
var app = express();

app.use(express.static("./public"));
app.get("/", function (req, res) {
    res.send([
        {
            'mno': Math.ceil(Math.random() * 1000),
            'headpic': 'img/p0281.jpg',
            'title': '美食1',
            'content': '美食介绍美食介绍美食介绍美食介绍美食介绍'
        },
        {
            'mno': Math.ceil(Math.random() * 1000),
            'headpic': 'img/p4788.jpg',
            'title': '美食2',
            'content': '美食介绍美食介绍美食介绍美食介绍美食介绍'
        },
        {
            'mno': Math.ceil(Math.random() * 1000),
            'headpic': 'img/p2679.jpg',
            'title': '美食3',
            'content': '美食介绍美食介绍美食介绍美食介绍美食介绍'
        }
    ]);
});

app.listen(3000);