var i=0;
var j=1;
var numGame = 10;

function display()
{
  var temp = new Array();

  for(var index = 0; index<numGame; index++)
  {
    temp[index] = data[index].slice(0,3);
    //alert(index);
  }

  temp.sort(compareRating);

  return temp;
}


function compareRating(a, b)
{
  if (a[1] === b[1]) {
        return 0;
    }
    else {
        return (a[1] < b[1]) ? 1 : -1;
    }
}


function change()
{

  i = Math.floor(Math.random() * numGame);
  j = Math.floor(Math.random() * numGame);
 
  while(i == j)
  {
    j = Math.floor(Math.random() * numGame);
  }


  document.getElementById("op1_id").innerHTML = data[i][0];
  document.getElementById("op1_name").innerHTML = data[i][2];
  document.getElementById("op1_rating").innerHTML = data[i][1];

  var add = "url('Images/"+(i+1)+".jpg')"; 
  document.getElementById("img1").style.backgroundImage = add;

  document.getElementById("op2_id").innerHTML = data[j][0];
  document.getElementById("op2_name").innerHTML = data[j][2];
  document.getElementById("op2_rating").innerHTML = data[j][1];

   add = "url('Images/"+(j+1)+".jpg')"; 
  document.getElementById("img2").style.backgroundImage = add;

}


function update(s)
{
  var Ea = 1/(1 + Math.pow(10,((data[j][1]-data[i][1])/400)));
  var Eb = 1/(1 + Math.pow(10,((data[i][1]-data[j][1])/400)));

  if(s=='opt1')
  {
    data[i][1] = Math.floor(data[i][1] + 32*(1 - Ea));
    data[j][1] = Math.floor(data[j][1] + 32*(0 - Eb));
  }
  else
  {
    data[i][1] = Math.floor(data[i][1] + 32*(0 - Ea));
    data[j][1] = Math.floor(data[j][1] + 32*(1 - Eb));
  }

  update_list();
  
}

