module.exports= (app)=>{
    app.get('/logout',(req,res)=>{
        res.redirect('/')
    })
}