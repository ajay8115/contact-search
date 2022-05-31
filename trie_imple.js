

export{trie}

class Node {
     constructor() {
          this.child = Array(10).fill(null);
          this.name = "";
          this.number= "";
     }

};

class trie {

     constructor() {
          this.root = new Node;
     }


     insert(name, number) {

          let cur = this.root;
          for (var i = 0; i < number.length ; i++) {


               if (cur.child[number[i] - '0'] == null)
                    cur.child[number[i] - '0'] = new Node;
              
               cur = cur.child[number[i] - '0'];
          }
          cur.name = name;
          cur.number = number;
     }

     dfs(cur) {
          if (cur == null)
               return;
          if (cur.name != "") {

               this.result.push({name : cur.name , number : cur.number});
          }
          for (var i = 0 ; i < 10; i++)
               this.dfs(cur.child[i]);

     }
     
     delete(num) {

          var cur = this.root ;
          console.log(num);
          for (var i = 0; i < num.length  ; i++ )
          {
               if (cur.child[num[i] - '0'] == null)
                    cur.child[num[i] - '0'] = new Node;

               cur = cur.child[num[i] - '0'];
          }

          if(cur.name != "")
             cur.name = "" ;
          
     }
     findall(num)
     { 
          this.result = [] ;    
          let cur = this.root ;
          for (var i = 0; i < num.length; i++ )
          {
               if (cur.child[num[i] - '0'] == null)
                      return this.result;
               cur = cur.child[num[i] - '0'];
          }
           
          this.dfs(cur) ;
          return this.result ;
     }

};