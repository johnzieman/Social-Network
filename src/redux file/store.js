import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sideBarReducer from "./sideBarReducer";

let store = {
    _rerenderEntireTree() { },

    _state: {
        profilePage: {
            posts: [
                { message: "Hi :)", likes: 20 },
                { message: "My name is John Zieman", likes: 36 },
                { message: "You are welcome to BurlyWood!", likes: 109 },
                { message: "This is a social network based on a clear React and Node", likes: 97 },
                { message: "This is my first big project", likes: 62 }
            ],
            newPostText: ''
        },
        dialogsPage: {
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
            ],

            newMessageBody: ""
        },
        sidebar: {}
    },

    getState() {
        return this._state
    },

    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sideBarReducer(this._state.sidebar, action);
        this._rerenderEntireTree(this._state);
    }
}




window.store = store;

export default store;