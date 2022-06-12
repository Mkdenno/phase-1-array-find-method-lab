// code your solution here

  superbowlWin=function(record) {
      function winnerYear(year){
          return year.result==="W"
      }
  
  const winner=record.find(winnerYear)
      if(winner){
          return winner.year;
      }}
  