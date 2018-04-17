btn_add.addEventListener ("click", function(e) {
    var duplicate =document.getElementsByTagName("li");
    for(var i = 0; i < duplicate.length; i++){
        if (listInput.value == duplicate[i].innerText){
            return;
        };
    };
    var li = document.createElement("li");
    li.innerText = listInput.value;
    list.appendChild(li);

    li.addEventListener ("click", function (e) {
        e.target.remove();
    }, false);
},  false );


