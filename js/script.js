let likeCount = 0;
let curtido = false; // booleana

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
document.getElementById("likeBtn").addEventListener("click", curtir);

let deslikeCount = 0;
let decurtido = false; // booleana

function curtir() {
 if(curtido == false){
   likeCount++;
   curtido = true;
  document.getElementById("deslikeCount").innerText = deslikeCount;
} else{
  likeCount--;
   curtido = false;
  document.getElementById("deslikeCount").innerText = deslikeCount;
}

 }
document.getElementById("deslikeBtn").addEventListener("click", deslike);
