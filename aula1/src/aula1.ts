const titulo: string = "Fundamentos do typescript";
console.log("Bem Vindo " + titulo);


var foradoif = "fora do if";
if(true){
   var dentrodoif = "dentro do if"
   console.log(dentrodoif);
}

console.log(foradoif);
console.log(dentrodoif);

type info = {
   id: number;
   nome: string;
   desc: string;
}

