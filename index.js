// code your solution here

  superbowlWin=function(record) {
      for(const item of record){
          if(item.result==="W"){
              return item.year;
          }
      }
   }
  