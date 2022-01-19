class TagRequestDelete {
    constructor(id){
        this.id = id;
        this.methodName = "Delete"
        this.url = `/api/tag?id=${id}`
    }
}

export default TagRequestDelete;