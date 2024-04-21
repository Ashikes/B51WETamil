const http = require('http');
const fs = require('fs');

const port = 3000;


const server = http.createServer((req, res) => {
    
    const currentDateTime = new Date().toISOString().replace(/:/g, '-').replace(/\..+/, '');
    const fileName = `${currentDateTime}.txt`;
    const filePath = 'files/'+fileName;
    const folderPath = 'files/';
  
  if (req.url === '/create-file') {

    fs.writeFile(filePath, currentDateTime, (err) => {
      if (err) {
        console.error('Error creating file:', err);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      } else {
        console.log('File created successfully:', fileName);
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('File created successfully');
      }
    });
  }else if (req.url === '/get-files') {
    
    fs.readdir(folderPath, (err, files) => {
      if (err) {
        console.error('Error reading folder:', err);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      } else {
        
        const txtFiles = files;

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(txtFiles));
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }

  
});


server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
