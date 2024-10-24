import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from './chapter03/Library';
import Clock from './chapter04/Clock';
import Comment from './chapter05/Comment';
import CommentList from './chapter05/CommentList';
import NotificationList from './chapter06/NotificationList';

// setInterval( ()=>{
//   const root = ReactDOM.createRoot(document.getElementById('root'));
//   root.render(
//     <React.StrictMode>
//       {/* <App /> */}
//       <Clock/>
//       {/* <Library /> */}
//       <Comment/>
//       <CommentList/>
//     </React.StrictMode>
//   );
// }, 1000);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NotificationList/>
  </React.StrictMode>
)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
