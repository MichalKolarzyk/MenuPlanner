class LocalStorageExt{
    static setArray = (key : string, array : Array<any>) => {
        if(!array){
            localStorage.removeItem(key);
        }
        const arrayAsString = JSON.stringify(array)
        localStorage.setItem(key, arrayAsString)
    }

    static getArray = (key : string) => {
        return this.getArrayOrDefault(key, []);
    }

    static getArrayOrDefault(key : string, defaultValue : any){
        const arrayAsString = localStorage.getItem(key);
        if(!arrayAsString){
            return defaultValue;
        }
        const array = JSON.parse(arrayAsString);
        return array;
    }

    static getNotEmptyArrayOrDefault(key : string, defaultValue : any){
        const array = this.getArrayOrDefault(key, []);
        if(array.length === 0){
            return defaultValue;
        }
        return array;
    }

    static setObject = (key : string, object : any) => {
        if(!object){
            localStorage.removeItem(key);
        }
        const objectAsString = JSON.stringify(object)
        localStorage.setItem(key, objectAsString)
    }

    static getDate = (key : string) => {
        return this.getOrDefault(key, new Date())
    }

    static getObject = (key : string) => {
        return this.getOrDefault(key, {})
    }

    static getOrDefault = (key : string, defaultValue : any) => {
        const objectAsString = localStorage.getItem(key);
        if(!objectAsString){
            return defaultValue;
        }
        const object = JSON.parse(objectAsString);
        return object;
    }
}

export default LocalStorageExt;