import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';

/*
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import './styles/app.css'
import configureStore from './store/configureStore'

const store = configureStore()

render(
  <Provider store={store}>
    <div className='app'>
      <App />
    </div>
  </Provider>,
  document.getElementById('root')
)
*/

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
