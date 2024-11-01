// 31: Getting the current date and time
 
// currentDate and time second millisecond
//  var currentDate = new Date();
//  console.log(currentDate);

// getting different chunk form the Date objects

// const currentDate = new Date();
// const currentTime = currentDate.getTime();
// // console.log(currentDate);
// console.log(currentTime);

// const currentDate = new Date();
// const currentYear = currentDate.getFullYear();


// const currentDate = new Date();
// const currentMonth = currentDate.getMonth();
// console.log(currentMonth);

// const currentDay = new Date();
// const toDay = currentDay.getDay();
// console.log(toDay);

// const currentDay = new Date();
// // const getFullYear = getFullYear();
// const convertToString = currentDay.toString();
// console.log(currentDay);
// // console.log(getFullYear);
// console.log( typeof convertToString);



//  const rightNow = new Date();

//  const dayName = [
//     "sunday",
//      "monday", 
//      "Tuesday", 
//      "Wednesday",
//       "Thursday", "friday", 
//       "saturday"];

// const currentDayNumber = rightNow.getDay();
// const currentDayName = dayName[currentDayNumber];
// console.log(currentDayName);

// 32: Extracting parts of the date and time

// const rightNow = new Date();
// console.log(rightNow);

// const rightNow = new Date();
// const dayName = ["Sun","Mon","Tues","Wed","Thur","Fri","Sat"];
// console.log(dayName[rightNow.getDay()]);


const rightNow = new Date();
// getFullYear?
// console.log(new Date().getFullYear());

// getMinutes
// console.log(new Date().getMinutes());
// gettingSeconds
// console.log(new Date().getSeconds());

// geting time
// console.log(new Date().getTime());


//getHours
// console.log(new Date().getHours());

// Month Name
// console.log(new Date().getMonth());

// const Months = [
//     "jan",
//     "Feb",
//     "Mar",
//     "Apr",
//     "May",
//     "jun",
//     "jul",
//     "Aug",
//     "Sep",
//     "Oct",
//     "Nov",
//     "Dec"];
// const monthNumber = rightNow.getMonth();
// console.log(Months[monthNumber]);


// print hours minutes and seconds in formated strings

// const hours = rightNow.getHours();
// const minutes = rightNow.getMinutes();
// const second = rightNow.getSeconds();
// console.log(`${hours}:${minutes}:${second}`);

// without using variables it can be access

// console.log(`${rightNow.getHours()}:${rightNow.getMinutes()}:${rightNow.getSeconds()} `);

// Am and PM

const hours = rightNow.getHours()

if(hours > 12){
    console.log(`${hours}: PM`);
    
}else{
    console.log(`${hours}: Am`);
    
}