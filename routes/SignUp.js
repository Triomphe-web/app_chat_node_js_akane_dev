module.exports= (app)=>{
    app.get('/sign_up',(req,res)=>{
        res.render('../views/signUp.ejs',{message: req.query.message})
    })
}