class LocalStorageWrapper{
    static setArray = (key, array) => {
        const arrayAsString = JSON.stringify(array)
        localStorage.setItem(key, arrayAsString)
    }

    static getArray = (key) => {
        const arrayAsString = localStorage.getItem(key);
        if(!arrayAsString){
            return [];
        }
        const array = JSON.parse(arrayAsString);
        return array;
    }

    static setDate = (key, date) => {
        const dateAsString = JSON.stringify(date)
        localStorage.setItem(key, dateAsString)
    }

    static getDate = (key) => {
        const dateAsString = localStorage.getItem(key);
        if(!dateAsString){
            return new Date();
        }
        const array = JSON.parse(dateAsString);
        return array;
    }
}

export default LocalStorageWrapper;