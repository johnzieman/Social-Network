const SEND_MESSAGE = 'SEND_MESSAGE'
let initialState = {
    dataItems: [
        { name: 'John', id: 'John' },
        { name: 'Alice', id: 'id#=Alice' },
        { name: 'David', id: 'id#=David' },
        { name: 'Dan', id: 'id#=Dan' },
        { name: 'Ann', id: 'id#=Ann' },
        { name: 'Mary', id: 'id#=Mary' },
        { name: 'Gwen', id: 'id#=Gwen' }
    ],

    dataMessage: [
        { message: 'Hello John' },
        { message: 'Hi John, BurlyWood is so amazing!' },
        { message: 'Dude, that\'s a real thing, you should go with us today!' },
        { message: 'I love you John!' }
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let stateCopy={...state};
            stateCopy.dataMessage=[...state.dataMessage]
            let body = action.newMessageBody;
            stateCopy.dataMessage.push({ message: body });
            stateCopy.newMessageBody = '';
            return stateCopy;

        default: return state
    }
}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });

export default dialogsReducer;