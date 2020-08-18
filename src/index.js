import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Todos from './ReactQuery'
import { registerMicroApps, start } from 'qiankun';

localStorage.setItem('__USER_NAME', 'admin123')
// import { registerApplication, start } from 'single-spa';
// const name = 'vue'
//
// const loadScript = (src) => {
//     return new Promise(((resolve, reject) => {
//         let script = document.createElement('script')
//         script.src = src
//         script.onload = resolve
//         script.onerror = reject
//         document.head.appendChild(script)
//     }))
// }
//
// registerApplication(
//   name,
//   async () => {
//       console.log(12)
//       await loadScript('http://localhost:8888/js/chunk-vendors.js')
//       await loadScript('http://localhost:8888/js/app.js')
//       console.log(window.vue)
//       return window.vue
//   },
//   (location) => location.pathname.startsWith('/vue'),
//   { some: 'value' }
// );
// start()

registerMicroApps([
  {
    name: 'vue', // app name registered
    entry: '//localhost:8081',
    container: '#myVue',
    activeRule: '/vue',
    props: {
      name: 'kuitos',
    }
  },
  {
    name: 'react', // app name registered
    entry: '//localhost:8082',
    container: '#myReact',
    activeRule: '/react',
    props: {
      name: 'kuitos',
    }
  }
]);
start();

ReactDOM.render(
  <React.StrictMode>
    <div style={{height: 400}}>
        <App />
    </div>
    </React.StrictMode>,
  document.getElementById('root')
)
