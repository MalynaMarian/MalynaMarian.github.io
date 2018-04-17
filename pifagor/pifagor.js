for (var i = 1; i < 10; i++){
    var div_row = document.createElement("div");
    div_row.setAttribute("class", "row" );
    
    for(var j = 1; j <10; j++){
        var div_cell = document.createElement("div");
        if (i==j){
            div_cell.setAttribute("class", "cell diagonal");
        }
        if (i>j){
            div_cell.setAttribute("class", "cell under");
        }
        if (i<j){
            div_cell.setAttribute("class", "cell upper");
        }
        div_cell.innerText = (i*j);
        div_row.appendChild(div_cell);

    }
    pifagor.appendChild(div_row);

}