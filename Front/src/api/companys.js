import axios from "./axios";

export const getPostsRequests = async () => await axios.get('/post-company');
 
export const createPostsRequests = async (post) =>{ 
  const form = new FormData()

  for (let key in post) {
    form.append(key, post[key])
  }

  return await axios.post('/post-company', form, {
    headers: {
      'Content-Type':'multipart/form-data'
    }
  } );
}

export const deletePostsRequests = async (id) => await axios.delete('/post-company/' + id);

export const getPostRequest = async id => await axios.get('/post-company/' + id);

export const updatePostsRequests = async (id, newFields) => await axios.put(`/post-company/${id}`, newFields);