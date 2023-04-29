
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from "./Redux/redux-state";
import {Provider} from "react-redux";


const root = ReactDOM.createRoot(document.getElementById('root'));

    // AddPost={ store.AddPost.bind(store)} AddMessage={store.AddMessage.bind(store)} updatePostText={store.updatePostText.bind(store)} updateMessageText={store.updateMessageText.bind(store)}
        root.render(
            <React.StrictMode>
                <Provider store={store}>
                <App />
                </Provider>
        </React.StrictMode>
    );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
