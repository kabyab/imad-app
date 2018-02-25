var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;

var dbconfig = {
    user: 'bandokabs',
    database: 'bandokabs',
    host: 'db.imad.hasura-app.io',
    password: 'db-bandokabs-28174'
};

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one' : {
        title : "Article One : Kabya Banerjee",
        heading : "Article One",
        date : "August 19, 2017",
        content : ` 
                <p>
                    This is article one. This is article one. This is article one. This is article one. This is article one. This is article one. This is article one. This is article one. This is article one. This is article one. This is article one.
                </p>
                <p>
                    This is article one. This is article one. This is article one. This is article one. This is article one. This is article one. This is article one. This is article one. This is article one. This is article one. This is article one.
                </p>
                <p>
                    This is article one. This is article one. This is article one. This is article one. This is article one. This is article one. This is article one. This is article one. This is article one. This is article one. This is article one.
                </p>
                <p>
                    This is article one. This is article one. This is article one. This is article one. This is article one. This is article one. This is article one. This is article one. This is article one. This is article one. This is article one.
                </p>`
        },
    'article-two' : {
        title : "Article Two : Kabya Banerjee",
        heading : "Article Two",
        date : "August 25, 2017",
        content : ` 
                <p>
                    This is article two. More content needs to be added.
                </p>`
        },
    'article-three' : {
        title : "Article Three : Kabya Banerjee",
        heading : "Article Three",
        date : "August 31, 2017",
        content : ` 
                <p>
                    This is article three. More content needs to be added.
                </p>`
        }
};


function createTemplate(data) {
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    
    var htmlTemplate = `
    <!doctype html>
    <html>
        <head>
            <title>${title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" /> 
            <link href="ui/style.css" rel="stylesheet"/>
        </head>
        <body>
            <div class="container">
                <div>
                    <a href="/">Home</a>
                </div>
                <hr/>
                <div>
                    <h1>${heading}</h1>
                </div>
                <div>
                    ${date}
                </div>
                <div>
                    ${content}
                </div>
            </div>
        </body>
    </html>
`;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var pool = new Pool(dbconfig);
app.get('/test-db', function(req, res) {
    // make a select query
    // return a response with the results
    // alert("Inside test-db");
    pool.query("SELECT * FROM test", function(err, result) {
        if (err) {
            res.status(500).send(err.toString());
        } else {
            res.send(JSON.stringify(result));
        }
        pool.end();
    });
});

var counter = 0;
app.get('/counter', function(req, res) {
    counter = counter + 1;
    res.send(counter.toString());
});

var names = [];
app.get('/submit-name/:name', function(req, res) {
    var nm = req.params.name;

    names.push(nm);
    res.send(JSON.stringify(names));
});

app.get('/articles/:articleId', function(req, res) {
    pool.query("SELECT * FROM articles WHERE id = '" + req.params.articleId + "'", function(err, result) {
        if (err)  {
            res.status(500).send(err.toString());
        } else {
            if (result.rows.length === 0) {
                res.status(404).send("Article Not Found");
            } else {
                var articleData = result.rows[0];
                res.send(createTemplate(articleData));
            }
        }
    });
});
// app.get('/:articleName', function(req, res) {
//     var articleName = req.params.articleName;
//     res.send(createTemplate(articles[articleName]));
// });
/* The entire code below is replaced by the code above...
app.get('/article-one', function (req, res) {
  // res.send('Article one requested and will be served here...'); 
  //res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
  res.send(createTemplate(articles.articleOne));
});

app.get('/article-two', function (req, res) {
   //res.send('Article two requested and will be served here...'); 
   //res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
   res.send(createTemplate(articles.articleTwo));
});

app.get('/article-three', function (req, res) {
  // res.send('Article three requested and will be served here...'); 
  //res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
  res.send(createTemplate(articles.articleThree));
}); 
*/

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
