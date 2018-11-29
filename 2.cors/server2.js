let express = require('express');
let app = express();
let whitList = ['http://localhost:3000']
app.use(function (req,res,next) {
  let origin = req.headers.origin;
  if(whitList.includes(origin)){
    // 设置哪个源可以访问我
    res.setHeader('Access-Control-Allow-Origin', origin);
    // 允许携带哪个头访问我
    res.setHeader('Access-Control-Allow-Headers','name');
    // 允许哪个方法访问我 get post默认支持
    res.setHeader('Access-Control-Allow-Methods','PUT');
    // cookie不能跨域，通过设置凭证强制允许跨域，携带cookie 服务端 客户端都要写
    // 允许携带cookie
    res.setHeader('Access-Control-Allow-Credentials', true);
    // 预检的存活时间
    res.setHeader('Access-Control-Max-Age',6);
    // 允许返回的头
    res.setHeader('Access-Control-Expose-Headers', 'name');
    // 默认会先options请求 options请求是试探是否跨域？
      if(req.method === 'OPTIONS'){
      res.end(); // OPTIONS请求不做任何处理
    }
  }
  next();
});
app.put('/getData', function (req, res) {
  console.log(req.headers);
  res.setHeader('name','jw');
  res.end("我不爱你")
})
app.get('/getData',function (req,res) {
  console.log(req.headers);
  res.end("我不爱你")
})
app.use(express.static(__dirname));
app.listen(4000);