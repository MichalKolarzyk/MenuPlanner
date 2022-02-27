class DateExt{
    static toDateString = (date) => {
      let day = date.getDate();
      if(day < 10){
        day = `0${day}`
      }
      let month = date.getMonth() + 1;
      if(month < 10){
        month = `0${month}`
      }
      const dateString = `${date.getFullYear()}-${month}-${day}`;
      return dateString;
    }
  
    static isEquas = (date1, date2) => {
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

    static getDayName = (date) => {
      return this.dayNames[date.getDay()]
    }
  }
  
  export default DateExt;
  