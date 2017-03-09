  <script src="http://cdn.jsdelivr.net/alasql/0.3/alasql.min.js"></script>
  
  
  
  alasql('SELECT * FROM XLSX("2015Bridges.xlsx",{headers:true})',[],function(data){
        console.log(data);
    });
