function kekw(k) {
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
var imageObj1 = new Image();
var imageObj2 = new Image();

var f = k;
imageObj1.src = "1.png"
imageObj1.onload = function() {
   ctx.drawImage(imageObj1, 0, 0);
   imageObj2.src = "2.png";
   imageObj2.onload = function() {   
    for(j=0;j<600;j=j+100){
    for(i=0;i<600;i=i+100){
        k--;
        if ( k >= 0 ) { continue; }
      ctx.drawImage(imageObj2, 0+i, 0+j);
        }} 
      var img = c.toDataURL("image/png");
      $("#myCanvas").html('<img src="' + img + '" width="auto" height="auto"/>');
       $("#all").css("display","block");
       $("#ile").html(f);
   }
};
}




$(document).ready ( function () {
    
    kekw(0);
    console.warn("nope. you can't check full image without clicking. it's protected :D")
    k=1;    

    $( "#click" ).click(function() {
        


    if(k>36)
        {
            $("#all").css("display","none");
            k=0;
            $("#ile").text("WYGRALES!");
            
        }
        else{
        
        
    $("#all").css("display","none");     
    kekw(k);
    k=k+1;}
});
    
    
});