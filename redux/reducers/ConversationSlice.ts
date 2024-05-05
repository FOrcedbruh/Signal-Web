import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IConversation } from "@/types/IConversation";
import { IMessage } from '@/types/IMessage';

interface StateType {
    messages: IMessage[],
    conversations: IConversation[],
    selectedConversation: IConversation | null
}

const initialState: StateType = {
    messages: [],
    conversations: [],
    selectedConversation: null
}

const ConversationSlice = createSlice({
    name: 'Conversation',
    initialState,
    reducers: {
        setMessages(state, action: PayloadAction<IMessage[]>) {
            state.messages = action.payload;
        },
        setConversations(state, action: PayloadAction<IConversation[]>) {
            state.conversations = action.payload;
        },
        selectConversation(state, action: PayloadAction<IConversation | null>) {
            state.selectedConversation = action.payload;
        }
    }
})

export const { setMessages, setConversations, selectConversation } = ConversationSlice.actions;
export default ConversationSlice.reducer;