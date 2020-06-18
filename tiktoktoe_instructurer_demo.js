let listGame=[];
function drawBoardGame(size){
    let game="<table>";
    for(i=0;i<size;i++){
        game+="<tr>";
        listGame[i]=[];
        for(j=0;j<size;j++){
            game+="<td onclick='changeStatus(this,"+i+","+j+");'>&nbsp;</td>";
            listGame[i][j]=-1;
        }
        game+="</tr>";
    }
    game+="</table>";
    document.getElementById("gameboard").innerHTML=game;
}
let status='x';
function changeStatus(cell,xPos,yPos){
    cell.innerHTML=status;
    if(status=='x'){
        listGame[xPos][yPos]=0;
        status='o';
    }
    else{
        listGame[xPos][yPos]=1;
        status='x';
    }
    checkWin(xPos,yPos);
}
function checkWin(xPos,yPos){
    //Check row
    console.log(listGame);
    let count=1;
    let i=xPos;
    let j=yPos;
    let valueOfCell=listGame[xPos][yPos];
    alert(valueOfCell);
    //Kiểm tra theo hàng ngang, mỗi giá trị đặt xuống kiểm tra phía trước và phía sau xem đủ điều kiện winner ko
    while(listGame[i][j+1]==valueOfCell){
        count++;
        confirmWinner(count,5);//5 phần tử giống nhau
        j++;
    }
    i=xPos;
    j=yPos;
    while(listGame[i][j-1]==valueOfCell){
        count++;
        confirmWinner(count,5);
        j--;
    }
    //Tương tự như vậy thay đổi giá trị i,j để check theo chiều dọc, đường chéo
}
function confirmWinner(count,number){
    if(count==number){
        alert("You are winner!");
        return;
    }
}