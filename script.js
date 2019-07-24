// var images=["image1.jpg","image2.jpg","image3,jpg"]
// var index=0;
// var final=images.length()-1;
// var picture1=new Image();
// var picture2=new Image();
// var picture3=new Image();
// var picture4=new Image();
// picture1.src="picture1.JPG";
// picture2.src="picture2.JPG";
// picture3.src="picture3.JPG";
// picture4.src="picture4.JPG";
// function scroll() {
//   if(index==final){
//     alert("No more pictures!")
//   }
//   else{
//     index=index+1;
//   }
//   document.pic1.src=images[index].src;
// }
// var tracker='picture1'
// function changeimg(){
//   var image=document.getElementById('picture1');
//   if(tracker=='picture1'){
//   image.src='picture3.JPG';
//   tracker='picture2';
//   }
//   else if (tracker=='picture2'){
//     image.src='picture3.JPG';
//     tracker='picture1';
//   }
//
//   }
// }
function open(event,tabName){
  var i, tabcontent, tablinks
  tabcontent=document.getElementsbyClassName("tablinks");
  for(i=0;i<tablinks.length;i++){
    tablinks[i].className=tablinks[i].className.replace("active","");
  }
  document.getElementById(tabName).style.display="block";
  event.currentTarget.className+="active";
}
