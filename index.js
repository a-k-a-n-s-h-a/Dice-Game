function random(){
    var randomn_number = Math.floor(Math.random()*6);
    console.log(randomn_number)
    return randomn_number;
 }
window.onload=function(){

var arr=["1.png","2.png","3.png","4.png","5.png","6.png"]

var url = "/images/";
var player1=random();
var player2=random();

console.log(player1,player2)

var message="";
if(player1>player2){
    message ="Player1 wins";
}
else if(player2===player1){
    message="Tie";

}
else{
    message="Player2 wins";
}
document.getElementById("message").innerHTML=message;
document.getElementsByClassName("dice");
document.getElementsByClassName("img1")[0].src=url+arr[player1];
document.getElementsByClassName("img2")[0].src=url+arr[player2];
}