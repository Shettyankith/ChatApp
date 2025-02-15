import React from 'react';
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "../context/AuthProvider.jsx";
import { toast } from "react-toastify";
import ImageConverter from "../context/ImageConverter.jsx"
import summaryAPI from '../Routes/index.js';
import { useNavigate } from 'react-router-dom';

function UpdateProfile() {
    const navigate = useNavigate();
    // use context for global state
    const { currentUser, setcurrentUser } = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            // Converting image to base64
            if (data.profilePic[0]) {
                data.profilePic = await ImageConverter(data.profilePic[0]);
            } else {
                delete data.profilePic;
            }

            // console.log("Payload is:", data);

            // API request
            const response = await axios.post(
                "/api/user/updateProfile",
                data,
                {
                    headers: { "Content-Type": "application/json" },
                    validateStatus: (status) => status < 500,
                }
            );


            if (response.data.success) {
                toast.success("Boom! Profile leveled up! 🚀");
                setcurrentUser(response.data.data);
                localStorage.setItem("token", JSON.stringify(response.data.data));
                navigate("/")
            } else {
                toast.error("Whoops! Let's try that again! 🔄");
            }
        } catch (e) {
            toast.error("Technical hiccup! 🛠 Give it another shot!");
            console.log("Error in Profile Update:", e);
        }
    };


    return (
        <div className="flex lg:flex-row flex-col-reverse justify-center items-center min-h-screen bg-[#1d1923] py-10 text-white">
            <div className="left p-5 w-[80%] lg:w-[30%] bg-[#1d232a] h-[70%] rounded-tl-xl rounded-bl-xl lg:flex justify-center items-center flex-col space-y-4">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#ad6af9] text-center">
                    Customize Your Profile ✨
                </h3>

                <form
                    className="space-y-4 mb-4 w-full lg:w-[80%] lg:block flex flex-col justify-center items-center"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    {/* Profile Pic Upload */}
                    {currentUser.profilePic ? (
                        <div
                            className="border-2 text-[#ad6af9] border-[#ad6af9] rounded-full overflow-hidden h-20 w-20 mx-auto relative cursor-pointer hover:bg-[#ad6af9] hover:text-white transition-all duration-300"
                            onClick={() => document.getElementById("profilePic").click()}
                        >
                            <img
                                src={currentUser.profilePic}
                                alt="profilePic"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <input type="file" name="profilePic" id="profilePic" className="hidden" {...register("profilePic")} />
                        </div>
                    ) : (
                        <div
                            className="border-2 text-[#ad6af9] border-[#ad6af9] p-5 rounded-full overflow-hidden h-20 w-20 mx-auto flex justify-center items-center cursor-pointer hover:bg-[#ad6af9] hover:text-white transition-all duration-300"
                            onClick={() => document.getElementById("profilePic").click()}
                        >
                            <i className="fa-solid fa-camera"></i>
                            <input type="file" name="profilePic" id="profilePic" className="hidden" {...register("profilePic")} />
                        </div>
                    )}


                    <p className="text-sm text-gray-400 text-center">{currentUser.profilePic?"Click to change your profile picture":"Click to upload your profile picture "}</p>

                    {/* Username Field */}
                    <div className="w-full md:w-[80%] lg:w-full space-x-4 text-md border-2 rounded-md p-2 border-gray-600">
                        <input
                            type="text"
                            name="username"
                            id="username"
                            defaultValue={currentUser.username}
                            placeholder="Choose a unique username"
                            className="bg-[#1d232a] outline-none w-full bg-[transparent]"
                            {...register("username", { required: true })}
                        />
                    </div>
                    <p className="text-[#ad6af9] text-sm text-center">Your username will be visible to everyone</p>
                    {errors.username && <span className="text-red-400">⚠ Username is required</span>}

                    {/* Bio Field */}
                    <div className="w-full md:w-[80%] lg:w-full space-x-4 text-md border-2 rounded-md p-2 flex items-center border-gray-600">
                        <textarea
                            name="bio"
                            id="bio"
                            defaultValue={currentUser.bio}
                            className="bg-[#1d232a] outline-none grow"
                            placeholder="Tell us a little about yourself..."
                            {...register("bio", { required: true })}
                        ></textarea>
                    </div>
                    {errors.bio && <span className="text-red-400">⚠ Please add a short bio</span>}

                    {/* Button */}
                    <div className='flex space-x-4 w-full lg:w-full md:w-[80%] justify-between items-center'>
                        <button
                            type='reset'
                            className="w-1/2  border-[#ad6af9] text-[#ad6af9] font-bold py-2 rounded-lg hover:bg-[#1d232a] hover:text-[#ad6af9] border-2"
                        >
                            Reset
                        </button>
                        <button
                            type="submit"
                            className="w-1/2  bg-[#ad6af9] font-bold py-2 rounded-lg hover:bg-[#1d232a] hover:text-[#ad6af9] border hover:border-2 transition-all duration-300 border-[#ad6af9]"
                        >
                            Save My Profile
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UpdateProfile;
