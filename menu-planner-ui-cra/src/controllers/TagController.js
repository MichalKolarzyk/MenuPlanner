import Sender from "../requests/Sender";
import TagRequestCreate from "../requests/tagRequests/TagRequestCreate"
import TagRequestGetById from "../requests/tagRequests/TagRequestGetById"
import TagRequestDelete from "../requests/tagRequests/TagRequestDelete"
import TagRequestUpdate from "../requests/tagRequests/TagRequestUpdate"
import TagRequestGetAll from "../requests/tagRequests/TagRequestGetAll"

class TagController {
    constructor(apiContext){
        this.sender = new Sender(apiContext);
    }

    getTags = async () => {
        const request = new TagRequestGetAll()
        const response = await this.sender.send(request);
        return response;
    }

    createTag = async (item) => {
        const request = new TagRequestCreate(item);
        this.sender.send(request)
    }

    getTag = async (id) => {
        const request = new TagRequestGetById(id);
        const response = await this.sender.send(request);
        return response;
    }

    deleteTag = async (id) => {
        const request = new TagRequestDelete(id);
        await this.sender.send(request);
    }

    updateTag = async (updateTag) => {
        const request = new TagRequestUpdate(updateTag);
        await this.sender.send(request);
    }
}

export default TagController