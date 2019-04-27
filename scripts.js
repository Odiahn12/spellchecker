const data = ["King Ibalaba", "Cote d'Ivoire", "Les Elephant"];

function check (){
  const phrase = document.getElementById("input").value;
  const url = "/api" + "?" + "phrase=" + phrase;
  /*global axios*/
  axios.get(url)
    .then(res=>{
      console.log(res.data)
      document.getElementById("result").innerHTML = res.data;
    })
    
}
