import TagRequestCreate from "../../requests/tagRequests/TagRequestCreate";
import TagRequestGetById from "../../requests/tagRequests/TagRequestGetById";
import TagRequestDelete from "../../requests/tagRequests/TagRequestDelete";
import TagRequestUpdate from "../../requests/tagRequests/TagRequestUpdate";
import TagRequestGetAll from "../../requests/tagRequests/TagRequestGetAll";
import useSender from "./useSender";

const useTagController = () => {
  const sender = useSender();

  const getTags = async () => {
    const request = new TagRequestGetAll();
    const response = await sender.send(request);
    return response;
  };

  const createTag = async (item) => {
    const request = new TagRequestCreate(item);
    sender.send(request);
  };

  const getTag = async (id) => {
    const request = new TagRequestGetById(id);
    const response = await sender.send(request);
    return response;
  };

  const deleteTag = async (id) => {
    const request = new TagRequestDelete(id);
    await sender.send(request);
  };

  const updateTag = async (updateTag) => {
    const request = new TagRequestUpdate(updateTag);
    await sender.send(request);
  };

  return {
    getTags,
    createTag,
    getTag,
    deleteTag,
    updateTag,
  };
};

export default useTagController;
