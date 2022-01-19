class TagRequestCreate {
    constructor(newTag){
        this.methodName = "POST"
        this.url = "/api/tag"
        this.body = newTag
    }
}

export default TagRequestCreate;