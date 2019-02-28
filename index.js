var mongoose = require('mongoose');
var blogSchema = require('./Schema');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/blog',{useNewUrlParser:true});

var Blog = mongoose.model('Blog',blogSchema,"blog");


//Metodo para consulta por autor
/*
Blog.find({author:'miguel angel'}, (error, docs) => {
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("-------Autor del blog-------");
    console.log(docs);
    process.exit(0);
});
*/

//Actualizacion por ID
/*
Blog.update({_id:'5c77f3ba61bd58bdecf05ba8'},{$set: {hidden:true}},
(error, docs) => {
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("------ Rgistro Actualizado -----");
    console.log(docs);
    process.exit(0);
});
*/

//Borrar por ID
/*
Blog.findByIdAndRemove({_id:'5c783fbeae88870e502c1da3'},(error,docs)=>{
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("----- Registro Borrado -----");
    console.log(docs);
    process.exit(0);

});
*/