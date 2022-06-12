// code your solution here

  superbowlWin=function(record) {
      function winners(year){
          return year.result==="W"
      }
  
  const winnerYear=record.find(winners)
      if(winnerYear){
          return winnerYear.year;
      }}
  