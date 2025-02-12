import { create } from 'zustand'

const chatUser = create((set) => ({
  selectedUser: null,
  setselecteduser: (selectedUser) => set({selectedUser}),
  messages: [],
  setmessages: (newMessages) => 
    set(
      (state)=>({
        // check whether the newMessage is array 
        // if yes assign it directly
        // if not sapread the previous message array and then add new message
        messages:Array.isArray(newMessages)?newMessages:[...(state.messages||[]),newMessages]
      })
  ),
}))

export default chatUser;
