$(document).ready(function(){
       
 var id_json = 0
     
  function myFunc() {
      $.getJSON('https://picsum.photos/list', function (data) {
      
      /* access to img name */
      var url0 = data[id_json].filename;
      var url1 = data[id_json+1].filename;
      var url2 = data[id_json+2].filename;
      
      url0 = url0.slice(5, 16);
      url1 = url1.slice(5, 16);
      url2 = url2.slice(5, 16);
      
      /* img src change */
      var src0 = "http://source.unsplash.com/" + url0;
      var src1 = "http://source.unsplash.com/" + url1;
      var src2 = "http://source.unsplash.com/" + url2;
      
      $("ul li:nth-child(1) img").attr("src", src0);
      $("ul li:nth-child(2) img").attr("src", src1);
      $("ul li:nth-child(3) img").attr("src", src2);
    });
  }

    myFunc();
    
    /* next 3 photos */
    $('.btn').click(function(){
        id_json += 3;
        myFunc();
    });
});