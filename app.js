const express = require( 'express' );
const app = express();

app.get("/",(req,resp)=>{
    resp.send("welcome");
})

app.listen(3000,function(){
    console.log('Listening on port 3000 now...')
})