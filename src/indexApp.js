
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Search from './components/Search';
import App from './app';
import Details from './components/Details';

const Navigation = createSwitchNavigator({
    App,
    Search,
    Details,
});

export default createAppContainer(Navigation);