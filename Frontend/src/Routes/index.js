const backendUrl = import.meta.env.VITE_BACKEND_URL;

console.log(backendUrl)

const summaryAPI=({
    signup:{
        url:`${backendUrl}/user/signup`,
        method:"post",
    },
})

export default summaryAPI;