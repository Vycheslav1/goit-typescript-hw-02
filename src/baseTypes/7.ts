/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Week {
  Monday='MONDAY',
  Tuesday='TUESDAY',
  Wednesday='WEDNESDAY',
  Thursday='THURSDAY',
  Friday='FRIDAY',
  Saturday='SATURRDAY',
  Sunday='SUNDAY',
};

function isWeekend(day:Week){
switch(day){
case 'MONDAY':return false;break;
case 'TUESDAY':return false;break;
case 'WEDNESDAY':return false;break;
case 'THURSDAY':return false;break;
case 'FRIDAY':return false;break;
case 'SATURRDAY':return true;break;
case 'SUNDAY':return true;break;
};
}

isWeekend(Week.Monday);

export{};
