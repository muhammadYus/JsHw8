 let rest = document.getElementById("output")
var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 13, 34, 65, 67, 66, 54, 34, 55, 89, 98,];
for (var i = 0; i < a.length; i++)
{
  if ((a[i] % 2) === 0)
  {
   console.log(a[i]);
  }
}
// function range(mass,stop) {
//     var result=['A','B','C','V','R','H','G','Y','Z'];
//     for (let i=mass.charCodeAt(0),x=stop.charCodeAt(0); i <=x; ++i){
//       result.push(String.fromCharCode(i));
//     }
//     return result;
//   };
  
//   range('A','B','C','V','R','H','G','Y','Z').join();