
	

    var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var num = ["!", "@", "#", "$", "%", "&", "*", "(", ")", "_", "-", "=", "+","{", "}", "[", "]", " ", ";", ":", "'", '"', ",", "<", ">", ".", "?", "/", "~", "`", "|"]

    function sorter(abc, numb){
        coder= {};
        for(i = abc.length-1, z = 0; i >= 0; i--, z++){
            coder[abc[i]] = abc[z];
            coder[abc[i].toUpperCase()] = abc[z].toUpperCase();
        } 
        for(i = numb.length-1, z = 0; i >= 0; i--, z++){
            coder[numb[i]] = numb[z];
        } 
        return coder;
    };
    var breaker = sorter(alpha, num);
    function decode(secret){
    let secretAnswer = "";
        for(i = 0; i < secret.length; i++){
            if(breaker[secret[i]]) {
                secretAnswer+= breaker[secret[i]];}
                else {secretAnswer+=secret[i]};
        }
    return secretAnswer;
    }

window.setInterval(function(){
  document.getElementById("coded").innerHTML = decode(document.getElementById("box").value);

}, 1000);

