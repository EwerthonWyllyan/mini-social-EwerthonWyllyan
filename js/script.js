let likeCount = 0;
let curtido = false; // booleana
let deslikeCount = 0;
let descurtido = false; // booleana

function curtir() {
 if(curtido == false){
   likeCount++;
   curtido = true;
  document.getElementById("likeCount").innerText = likeCount;
} else{
  likeCount--;
   curtido = false;
  document.getElementById("likeCount").innerText = likeCount;
}

 }




function descurtir() {
 if(deslike == false){
   deslikeCount++;
   deslike = true;
  document.getElementById("deslikeCount").innerText = deslikeCount;
} else{
  deslikeCount--;
   deslike = false;
  document.getElementById("deslikeCount").innerText = deslikeCount;
}

 }
document.getElementById("likeBtn").addEventListener("click", curtir);
document.getElementById("deslikeBtn").addEventListener("click", descurtir);