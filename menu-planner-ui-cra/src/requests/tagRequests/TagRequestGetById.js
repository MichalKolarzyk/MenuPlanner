class TagRequestGetById {
    constructor(tagId){
        this.methodName = "GET"
        this.url = `/api/tag/${tagId}`
    }
}

export default TagRequestGetById;