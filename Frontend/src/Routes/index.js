const backendUrl = import.meta.env.VITE_BACKEND_URL;

const summaryAPI=({
    signup:{
        url:`${backendUrl}/user/signup`,
    },
    signin:{
        url:`${backendUrl}/user/signin`,
    },
    getAllUsers:{
        url:`${backendUrl}/user/alluser`,
    },
    getMessage:{
        url:`${backendUrl}/message/get/`,
    },
    sendMessage:{
        url:`${backendUrl}/message/send/`,
    },
    updateProfile:{
        url:`${backendUrl}/user/updateProfile/`,
    },
})

export default summaryAPI;

