function reverse(){
    let val1=document.getElementById('input').value;

    let  v1=val1.split(' ');
    for(let i=0; i < v1.length;i++){
        if(v1.length%2 === 0 ){
           document.getElementById('even_words').innerText="It has "+ v1.length +" words and "+ v1.length +" is even number: "+val1;
        } else {
            v1.reverse();
            document.getElementById('rev_output').innerText="Reversed: "+v1.join(' ');

        }

    }
}

function reset(){
    document.getElementById('input').value='';
    document.getElementById('rev_output').innerText='';
    document.getElementById('even_words').innerText='';
}


let arr= [];
var i=0;
var arr1 =Array();

function pushIntoArray(){
    arr1[i]=document.getElementById('num_value').value;
    i++;
    document.getElementById('num_value').value='';
    document.getElementById('show_arr').innerHTML=arr1;
    console.log(arr1);

    che();
}

function che(){
      let result = false;
      let min = Math.min(...arr1);
      let max = Math.max(...arr1);
      let arrg = [];
       while(min <= max){
                   arrg.push(min++);
         }

      const s = new Set(arr1);

      if(arr1.length>1){

      if(arr1.length !== s.size || arrg.length !==arr1.length){
         result = true;
      }
      if(result) {
        document.getElementById("inc_gd").innerText="True";
      } else {
        document.getElementById("inc_gd").innerText="False";
      }
      
    }
}