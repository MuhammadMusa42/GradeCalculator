function grade(){
    console.log('hello')
  let Physics =document.getElementById('Physics').value;
  let Maths =document.getElementById('Maths').value ;
  let English =document.getElementById('English').value ;
  let Pakstudy=document.getElementById('pakstudy').value ;
  let Computer =document.getElementById('Computer').value ;
console.log(Maths)
console.log(Physics)
console.log(English)
console.log(Pakstudy)
console.log(Computer)

let totalmarks= parseInt(Physics) + parseInt(Maths) + parseInt(English) + parseInt(Pakstudy ) + parseInt(Computer);
console.log(totalmarks)
let avergemarks = totalmarks/5;
console.log(avergemarks); 
let grade;

if (avergemarks>=90)
{
    grade = 'A+';
}
else if(avergemarks>=80){
    grade = 'A';
}
else if(avergemarks>=70)
{
    grade = 'B';
}
else if(avergemarks >=60)
{
    grade = 'C';
}
else if(avergemarks>=50)
{
    grade = 'D';
}
else{
    grade = 'F';
}
console.log(grade)
document.getElementById('result').innerHTML= "Your total marks is : 500 and you obtained marks is " + totalmarks + "<br>" + "you avarage is ="+ avergemarks + "<br>" + "Your Grade is =" + grade;
}

