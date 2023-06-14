import http from 'http'
//const result = await fetch('http://10.1.188.1:5000');
//console.log(result);
//const res=await result.json(); //これも非同期
//console.log(res);

const server = http.createServer(async(req,res) => {
    const result = await fetch('http://10.1.188.1:5000');
    const response= await result.json();
    console.log(response);
    
    // res.write("お名前を入力してください");
    //console.log(res);
    
    const url = new URL(req.url,"http:localhost:8000/");
    const Params = url.searchParams.get("name");
    const urlParams = decodeURIComponent(Params);
    console.log(urlParams);

    const html = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Document</title>
  </head>

  <body>
    <h1>${urlParams}</h1>
  </body>

  </html>`;
  res.write(html);
});
server.listen(8000);