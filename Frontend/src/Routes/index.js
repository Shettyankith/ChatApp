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
})

export default summaryAPI;

