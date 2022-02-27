class LocalStorageExt{
    static setArray = (key, array) => {
        if(!array){
            localStorage.removeItem(key);
        }
        const arrayAsString = JSON.stringify(array)
        localStorage.setItem(key, arrayAsString)
    }

    static getArray = (key) => {
        return this.getArrayOrDefault(key, []);
    }

    static getArrayOrDefault(key, defaultValue){
        const arrayAsString = localStorage.getItem(key);
        if(!arrayAsString){
            return defaultValue;
        }
        const array = JSON.parse(arrayAsString);
        return array;
    }

    static getNotEmptyArrayOrDefault(key, defaultValue){
        const array = this.getArrayOrDefault(key, []);
        if(array.length === 0){
            return defaultValue;
        }
        return array;
    }

    static setObject = (key, object) => {
        if(!object){
            localStorage.removeItem(key);
        }
        const objectAsString = JSON.stringify(object)
        localStorage.setItem(key, objectAsString)
    }

    static getDate = (key) => {
        return this.getOrDefault(key, new Date())
    }

    static getObject = (key) => {
        return this.getOrDefault(key, {})
    }

    static getOrDefault = (key, defaultValue) => {
        const objectAsString = localStorage.getItem(key);
        if(!objectAsString){
            return defaultValue;
        }
        const object = JSON.parse(objectAsString);
        return object;
    }
}

export default LocalStorageExt;