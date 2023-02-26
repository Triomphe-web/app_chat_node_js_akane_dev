module.exports = (app)=>{
    app.get('/auth',(req,res)=>{
        res.render('../views/auth.ejs',{message: req.query.message})
    })
}