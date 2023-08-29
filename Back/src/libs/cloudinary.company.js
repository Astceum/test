import {v2 as cloudinary} from 'cloudinary';
          
cloudinary.config({ 
  cloud_name: 'dhibssnwy', 
  api_key: '892689165631411', 
  api_secret: 'gWfsmU1eo0ocX6Q8n6qxdhoPtBo' 
});

export const uploadImage = async filePath => {
    return await cloudinary.uploader.upload(filePath, {
        folder: 'company'
    })
}

export const deleteImage = async id => {
    return await cloudinary.uploader.destroy(id)
}