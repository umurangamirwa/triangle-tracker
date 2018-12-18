function getResult(){
    var side1= parseFloat(document.getElementById('side1').value);
    var side2 = parseFloat(document.getElementById('side2').value);
    var side3 = parseFloat(document.getElementById('side3').value);
    if(side1 === side2 && side1 === side3 && side2 === side3){
    alert("Equilateral");
    window.location.href="equilateral.html";
    }
    else if(side1 === side2 || side1 === side3 ||side2 === side3){
    alert("Isosceles");
    window.location.href="isosceless.html";
    }
    else if((side1 + side2) <= side3 || (side1 + side3) <= side2 || (side2 + side3) <= side1) {
    alert("Not a definite triangle");
    window.location.href="scalene.html";
    }
    else{
    alert("Scalene");
    }
    }
