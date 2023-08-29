import axios from "./axios";

export const getPostsRequests = async () => await axios.get('/post');
 
export const createPostsRequests = async (post) =>{ 
  const form = new FormData()

  for (let key in post) {
    form.append(key, post[key])
  }

  return await axios.post('/post', form, {
    headers: {
      'Content-Type':'multipart/form-data'
    }
  } );
}

export const deletePostsRequests = async (id) => await axios.delete('/post/' + id);

export const getPostRequest = async id => await axios.get('/post/' + id);

export const updatePostsRequests = async (id, newFields) => await axios.put(`/post/${id}`, newFields);