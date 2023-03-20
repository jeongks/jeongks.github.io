(async function(){
    const app = await require('./app');
    app.listen(8080, ()=> console.log("listening on 8080"));
})();