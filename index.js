// code your solution here

//   superbowlWin=function(record) {
//       for(const item of record){
//           if(item.result==="W"){
//               return item.year;
//           }
//       }
//    }
function superbowlWin(record){
    function winner(year){
        return year.result==="W"
    }
    const winningYear=record.find(winner);
        if(winningYear){
            return winningYear.year;
        }
    
}
  