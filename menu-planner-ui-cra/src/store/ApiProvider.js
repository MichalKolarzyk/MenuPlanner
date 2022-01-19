import React, {useState, useEffect} from "react"
import Sender from "../requests/Sender"
import TagRequestDelete from '../requests/tagRequests/TagRequestDelete'
import TagRequestGetAll from '../requests/tagRequests/TagRequestGetAll'
import TagRequestCreate from '../requests/tagRequests/TagRequestCreate'
import ApiContext from "./ApiContext"
import TagRequestUpdate from "../requests/tagRequests/TagRequestUpdate"

const ApiProvider = (props) => {
    const sender = new Sender();
    const [tags, setTags] = useState([]);

    useEffect(() => {getAllTagsHandler()}, [])
    
    const addTagHandler = async (item) => {
        const request = new TagRequestCreate(item);
        await sender.send(request)
        await getAllTagsHandler();
    }

    const removeTagHandler = async (id) => {
        const request = new TagRequestDelete(id);
        await sender.send(request);
        await getAllTagsHandler();
    }

    const getAllTagsHandler = async () => {
        const request = new TagRequestGetAll()
        const response = await sender.send(request);
        setTags(response);
    }

    const updateTagHandler = async (updateTag) => {
        const request = new TagRequestUpdate(updateTag);
        const response = await sender.send(request);
        await getAllTagsHandler();
    }

    const apiContext = {
        tags: tags,
        addTag: addTagHandler,
        removeTag: removeTagHandler,
        updateTag: updateTagHandler
    }

    return <ApiContext.Provider value={apiContext}>
        {props.children}
    </ApiContext.Provider>
}

export default ApiProvider