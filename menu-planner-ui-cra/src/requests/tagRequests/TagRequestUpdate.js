class TagRequestUpdate {
    constructor(updateTag){
        this.methodName = "PUT"
        this.url = "/api/tag"
        this.body = updateTag
    }
}

export default TagRequestUpdate;