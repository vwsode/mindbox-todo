import { Provider } from 'react-redux';

import Todo from './components/Todo/Todo';

import { store } from './store/store';

const App = () => {
    return (
        <Provider store={store}>
            <Todo />
        </Provider>
    );
};

export default App;
