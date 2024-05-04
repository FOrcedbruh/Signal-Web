import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IConversation } from "@/types/IConversation";


interface StateType {
    messages: any[],
    conversations: IConversation[],
    selectedConversation?: string | undefined
}

const initialState: StateType = {
    messages: [],
    conversations: [],
    selectedConversation: ''
}

const ConversationSlice = createSlice({
    name: 'Conversation',
    initialState,
    reducers: {
        setMessages(state, action: PayloadAction<any>) {
            state.messages = action.payload;
        },
        setConversations(state, action: PayloadAction<IConversation[]>) {
            state.conversations = action.payload;
        },
        selectConversation(state, action: PayloadAction<string>) {
            state.selectedConversation = action.payload;
        }
    }
})

export const { setMessages, setConversations, selectConversation } = ConversationSlice.actions;
export default ConversationSlice.reducer;