Koa-Mongolog
=======

[Koa](http://koajs.com "Koa") middleware for logging http queries to [mongoDB](http://mongodb.org "MongoDB").

`Mongolog` saves data this way:

```js
{
    ip: '<clients ip address>',
    date: '<short date>',
    urls: {
        url: '<url to resource>',
        count: '<count of requests>'
    }
}
```

`Mongolog` data could be read from command line by [mongolog-cli](https://github.com/coderaiser/node-mongolog-cli "mongolog-cli").

## Install

`npm i koa-mongolog --save`

## Hot to use?

`Mongolog` could be used as `koa` middleware this way.

```js
    
var mongolog    = require('mongolog'),
    koa         = require('koa'),
    mongo       = require('mongodb').MongoClient,
    
    url         = 'mongodb://localhost:27017/myproject',
    port    = 1337,
    
    app     = koa();

mongo.connect(url, function(error, db) {
    if (error) {
        console.error(error.message);
    } else {
        app.use(mongolog({
            db: db
        }));
        
        app.use(function*(next) {
            console.log(this.request.url);
            yield next;
        });
        
        app.listen(port);
        console.log('http://localhost:%s', port);
    }
});
```

## See also

- [mongolog](https://github.com/coderaiser/node-mongolog "Mongolog") express middleware.

## License

MIT

