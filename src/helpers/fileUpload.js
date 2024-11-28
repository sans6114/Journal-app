export const fileUpload = async (file) => {
    if (!file) throw new Error('no file added')
    const cloudinaryURL = 'https://api.cloudinary.com/v1_1/duldb7bqo/upload'
    const formData = new FormData()

    formData.append('upload_preset', 'react-journal')
    formData.append('file', file)

    try {
        const response = await fetch(cloudinaryURL, {
            method: 'POST',
            body: formData
        })
        if(!response.ok) throw new Error(`${file.name} no ah podido subirse`)

        const cloudResponse = await response.json()
        
        return cloudResponse.secure_url
    } catch (error) {
        console.log(error)
        throw new Error(error.message)
    }

}