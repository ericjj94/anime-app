import React from 'react';
import { mount as enzymeMount, configure } from 'enzyme';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import initialize from './storeInitialize';

import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

export function mount(component, state) {
    const store = initialize(state);
    return {
      component: enzymeMount(
        <Provider store={store}>
          <BrowserRouter>
            {component}
          </BrowserRouter>
        </Provider>
      ),
      store,
    };
  }