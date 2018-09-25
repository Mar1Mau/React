
var i;
var mat = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  

function UpperPart() {
    console.log("upperPart");

    for(i=1;i<mat.length;i++){

        for(j=1;j<mat[i];j++){

            if(i==j && i<j){
                //document.write(i,j);
                //document.body.style.backgroundColor = "yellow";
                //document.getElementById("demo").innerHTML = mat[i][j];
                //document.write(mat[i][j].fontcolor("blue")+ "<br>")
            }
             
        }
    }
    
    //document.getElementById("demo").color = "red";
}


function Diagonals() {
    console.log("Diagonals");

    for(i=1;i<mat.length;i++){

        for(j=1;j<mat[i];j++){

            if(i==j && i+j===2){
                //document.write(i,j);
                //document.body.style.backgroundColor = "yellow";
            }
             
        }
    }
    //document.getElementById("r").style.color = "blue";
}


function DownPart() {
    console.log("DownPart");

    for(i=1;i<mat.length;i++){

        for(j=1;j<mat[i];j++){

            if(i==j && i>j){
                //document.write(i,j);
                //document.body.style.backgroundColor = "yellow";
            }
             
        }
    }
    //document.getElementById("o").style.color = "yellow";
}


function Border() {
    console.log("Border");
    document.getElementById("mainId").style.color = "pink";
}


