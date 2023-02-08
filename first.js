function checkForm() {
  var table = document.getElementsByClassName("pvtTable");
  //var trows = table.rows;

  var convertedIntoArray = [];
$('table.pvtTable tr').each(function() {
  var rowDataArray = [];
  
 var actualData = $(this).find('thead,th.pvtRowLabel,td.pvtVal');
  if (actualData.length > 0) {
      actualData.each(function() {

          
          rowDataArray.push($(this).text());
      });
      convertedIntoArray.push(rowDataArray);
  }
});
console.log(convertedIntoArray);



const newTable = document.createElement("table");
newTable.innerHTML = "<thead><th>NO</th><th>Student_ID</th><th>Student_Name</th><th>Student_Status</th><th>Quizzes</th><th>C_W</th><th>H_W</th><th>Exam</th>";




  var x=0;
  var myid;
  var myname;
  var mystatus="active";
  var myquiz=0;
  var mycw=0;
  var myhw=0;
  var exam=0;

for(player of convertedIntoArray){
  const newRow = document.createElement("tr");
  const No = document.createElement("td");
  const Student_ID = document.createElement("td");
  const Student_Name = document.createElement("td");
  const Student_Status = document.createElement("td");
  const Quizzes = document.createElement("td");
  const C_W= document.createElement("td");
  const H_W = document.createElement("td");
  const Exam= document.createElement("td");
  // Header


     
  // Body
  //for (x=0 ; x<5;x++){
      
      
      No.textContent = x+1;
      //Student_ID.textContent =x+2;
      
      Student_ID.textContent = convertedIntoArray[x][0];
      Student_Name.textContent = convertedIntoArray[x][1];
      Student_Status.textContent = mystatus;
      Quizzes.textContent = convertedIntoArray[x][2];
      C_W.textContent = convertedIntoArray[x][3];
      H_W.textContent = convertedIntoArray[x][4];
      Exam.textContent = convertedIntoArray[x][5];
      
      newRow.appendChild(No);
      newRow.appendChild(Student_ID);
      newRow.appendChild(Student_Name);
      newRow.appendChild(Student_Status);
      newRow.appendChild(Quizzes);
      newRow.appendChild(C_W);
      newRow.appendChild(H_W);
      newRow.appendChild(Exam);

      //,Student_ID,Student_Name,Student_Status,Quizzes,C_W,H_W,Exam);
      //newRow.appendChild(Student_ID);
      newTable.appendChild(newRow);
      console.log(Student_Name.textContent);
      x=x+1;

  }
  
  
  
  const target = document.getElementById('target');
  target.appendChild(newTable);
  //console.log(Student_ID);
 



  //tdPlayer.textContent = player.name;
  //tdScore.textContent = player.score;    
  
  
  //newRow.appendChild(tdScore);
  
}




    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>END

             

