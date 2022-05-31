// import { url } from "inspector";
import { trie } from "./trie_imple.js";

let Trie = new trie;
let name , number ;


tx1.onkeyup = function(key){
      
        let x = document.getElementById('tx1').value ;
        var container = document.querySelector('#child');

        if(x.length == 0) 
        {
                removeAllChildNodes(container);
                return ;
        }
        console.log(key.key + " "+ x);

        var temp = Trie.findall(x) ; 
       
            removeAllChildNodes(container);

        console.log(temp) ;

        for(var i = 0 ; i < temp.length ; i ++ ) 
        {
                var n = temp[i].name ;
                var num = temp[i].number ;
                var para = document.createElement('para' ) ;
                var img = document.createElement('img')
                img.src = "./cont.png" ;
                document.getElementById('child').appendChild(img) ;
                document.getElementById('child').appendChild(para);
                document.getElementById('child').lastChild.innerHTML = n + "<br>" + "<strong>" + num.substr(0 , x.length) + "</strong>" +  num.substr(x.length , num.length) + "</br>" ;
        }
        // removeAllChildNodes(container);

    
}
function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }

bt1.onclick = function() {
       
     name = document.getElementById('tx2').value ;
     number = document.getElementById('tx3').value ;

     Trie.insert(name , number ) ;

}
bt2.onclick = function () {
        
        if(confirm( "Are you want to delete") )
        {
             number = document.getElementById('dele').value ;
             Trie.delete(number); 
        }


}