import { create } from 'zustand'

const chatUser = create((set) => ({
  selectedUser: null,
  setselecteduser: (selectedUser) => set({selectedUser}),
  messages: [],
  setmessages: (messages) => set({messages}),
}))

export default chatUser;
