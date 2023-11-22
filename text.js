const grey=document.getElementById('grey');
const lightblue=document.getElementById('lightblue');
const beige=document.getElementById('beige');
const pics3=document.getElementById('pics3');
const color=document.getElementById('color');
Grey.addEventListener('click', show);
function show(event){
  let text=event.target.getAttribute('id');
  document.getElementById('color').innerHTML=text;
}


Lightblue.addEventListener('click', show);
function show(event){
  let text=event.target.getAttribute('id');
  document.getElementById('color').innerHTML=text;
  
}

Beige.addEventListener('click', show);
function show(event){
  let text=event.target.getAttribute('id');
  document.getElementById('color').innerHTML=text;
}



  









      
  const pics=document.getElementsByClassName('pics');
      
   
    pics[0].addEventListener("click", showPics0);
function showPics0(){
  const pic=document.getElementById('pic');
  pic.src="https://xcdn.next.co.uk/common/items/default/default/itemimages/altitemzoom/c56978s.jpg?im=Resize,width=364"
}
  

pics[1].addEventListener("click", showPics1);
function showPics1(){
  const pic=document.getElementById('pic');
  pic.src="https://xcdn.next.co.uk/common/items/default/default/itemimages/altitemzoom/c56978s2.jpg?im=Resize,width=364";
 
}


pics[2].addEventListener("click", showPics2);
function showPics2(){
  const pic=document.getElementById('pic');
  pic.src="https://xcdn.next.co.uk/common/items/default/default/itemimages/altitemzoom/c56978s3.jpg?im=Resize,width=364 " ;
  

}
    
  pics[3].addEventListener("click", showPics3);
function showPics3(){
  const pic=document.getElementById('pic');
  pic.src="https://xcdn.next.co.uk/common/items/default/default/itemimages/altitemzoom/c56978s4.jpg?im=Resize,width=364 ";
  

}


    

Lightblue.addEventListener("click", lightbluePicture);
    function lightbluePicture(){
      
      const pic=document.getElementById("pic");
      pic.src="https://xcdn.next.co.uk/common/items/default/default/publications/g95/shotzoom/1051/a36-912s.jpg?im=Resize,width=364";
    
      
      const pics=document.getElementsByClassName('pics');
      pics[0].src="https://xcdn.next.co.uk/common/Items/Default/Default/Publications/G95/minishot/1051/A36-912s.jpg";

      pics[1].src="https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemThumb/A36912s2.jpg";
      
    
    
      pics[2].src="https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemThumb/A36912s3.jpg";
    
   
      pics[3].src="https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemThumb/A36912s4.jpg";
    
   
  pics[0].addEventListener("click", showPics);
function showPics(){
  const pic=document.getElementById('pic');
  pic.src="https://xcdn.next.co.uk/common/items/default/default/publications/g95/shotzoom/1051/a36-912s.jpg?im=Resize,width=364";
  
}      
      
pics[1].addEventListener("click", showPics0);
function showPics0(){
  const pic=document.getElementById('pic');
  pic.src="https://xcdn.next.co.uk/common/items/default/default/itemimages/altitemzoom/a36912s2.jpg?im=Resize,width=364";
 
}      
      
 pics[2].addEventListener("click", showPics1);
function showPics1(){
  const pic=document.getElementById('pic');
  pic.src="https://xcdn.next.co.uk/common/items/default/default/itemimages/altitemzoom/a36912s3.jpg?im=Resize,width=364";
 
}      
      
  pics[3].addEventListener("click", showPics2);
function showPics2(){
  const pic=document.getElementById('pic');
  pic.src="https://xcdn.next.co.uk/common/items/default/default/itemimages/altitemzoom/a36912s4.jpg?im=Resize,width=364";
  
}
    }




Beige.addEventListener("click", beigePicture);
    function beigePicture(){
  
      const pic=document.getElementById("pic");
      pic.src="https://xcdn.next.co.uk/common/items/default/default/itemimages/altitemzoom/c85205s.jpg?im=Resize,width=364";
    
    
   
      pics[0].src="https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemThumb/C85205s.jpg";
    
      pics[1].src="https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemThumb/C85205s2.jpg";
      pics[2].src="https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemThumb/C85205s3.jpg";
      pics[3].src="https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemThumb/C85205s4.jpg";
    
      
    
    
     pics[0].addEventListener("click", showPics0);
function showPics0(){
  const pic=document.getElementById('pic');
  pic.src="https://xcdn.next.co.uk/common/items/default/default/itemimages/altitemzoom/c85205s.jpg?im=Resize,width=364";
  
}    
      
      
pics[1].addEventListener("click", showPics1);
function showPics1(){
  const pic=document.getElementById('pic');
  pic.src="https://xcdn.next.co.uk/common/items/default/default/itemimages/altitemzoom/c85205s2.jpg?im=Resize,width=364";
  

}

pics[2].addEventListener("click", showPics2);
function showPics2(){
  const pic=document.getElementById('pic');
  pic.src="https://xcdn.next.co.uk/common/items/default/default/itemimages/altitemzoom/c85205s3.jpg?im=Resize,width=364";
  
}

pics[3].addEventListener("click", showPics3);
function showPics3(){
  const pic=document.getElementById('pic');
  pic.src="https://xcdn.next.co.uk/common/items/default/default/itemimages/altitemzoom/c85205s4.jpg?im=Resize,width=364";
  


}
    }

    


for(let i=0;  i<pics.length;  i++){
  pics[i].addEventListener('click', addBorder);
  
  function addBorder(){
    const current=document.getElementsByTagName('img');
   for(let i=0; i<current.length; i++){
     
    
    current[i].className="pics";
  
  if(current[i].className==="pics"){
    this.className="square"
      
    }else{
      this.className="pics";
    }
  }
  
  }
  }
  











