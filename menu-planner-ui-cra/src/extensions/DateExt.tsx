class DateExt{
    static toDateString = (date : Date) => {
      let day : number = date.getDate();
      let dayString : string = day.toString();
      if(day < 10){
        dayString = `0${day}`
      }
      let month = date.getMonth() + 1;
      let monthString : string = month.toString();
      if(month < 10){
        monthString = `0${month}`
      }
      const dateString = `${date.getFullYear()}-${monthString}-${dayString}`;
      return dateString;
    }
  
    static isEquas = (date1 : Date, date2 : Date) => {
      if (date1.getDay() !== date2.getDay()) {
        return false;
      }
      if (date1.getMonth() !== date2.getMonth()) {
        return false;
      }
      if (date1.getFullYear() !== date2.getFullYear()) {
        return false;
      }
      return true;
    }

    static dayNames = [ 'Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota']

    static getDayName = (date : Date) => {
      return this.dayNames[date.getDay()]
    }
  }
  
  export default DateExt;
  