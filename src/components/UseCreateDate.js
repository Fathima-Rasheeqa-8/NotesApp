const UseCreateDate = () => {
    const dateObj = new Date(); // Wed Jan 29 2025 10:15:30 GMT+0530 (India Standard Time)
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const monthName=months[dateObj.getMonth()]; // getMonth() return 0 ,1,...11
    const date = `${monthName} ${dateObj.getDate()}, ${dateObj.getFullYear()}`;
    return date;
  };
  
  export default UseCreateDate;
