
var katzDeliLine= [];

function takeANumber(katzDeliLine, Name)
{
  katzDeliLine.push(Name);

 return "Welcome, " + Name + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(katzDeliLine)
{
  if(katzDeliLine.length>0)
  {
     return "Currently serving "+katzDeliLine.shift()+ ".";
  }
  else
  {
  return "There is nobody waiting to be served!";
}
}

function currentLine(katzDeliLine)
{
  if(katzDeliLine.length>0)
  
    {
      var line = "";
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> 53165700dd6d69b1e5113b5af6c2491cda064288
      for(var i=0;i<katzDeliLine.length-1; i++)
      {
       // 1. Bill
        var string = (i+1) + ". " + katzDeliLine[i] + ", ";
        line = line + string;
      }
      var laststring = (katzDeliLine.length) + ". " + katzDeliLine[katzDeliLine.length-1];
      //Remove last letter from line
      line = line + laststring;
<<<<<<< HEAD
    return "The line is currently: " + line 
=======
    return "The line is currently: " + line ;
=======
>>>>>>> 53165700dd6d69b1e5113b5af6c2491cda064288
      for(var i=0;i<katzDeliLine.length; i++)
      {
      line = katzDeliLine[i]+1 + "." + katzDeliLine  // line =  1. person[0] + 2. person[1] +.person[n-1]
        
      }
    return "The line is currently: " + katzDeliLine[i]+1 + "."+ katzDeliLine;
<<<<<<< HEAD
=======
>>>>>>> e26619fcbd1134d95adaaf85e893ed1283602244
      
>>>>>>> 53165700dd6d69b1e5113b5af6c2491cda064288
  }
  
  else
  {
  
return "The line is currently empty." ;
}

}