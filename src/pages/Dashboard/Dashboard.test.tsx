import { BrowserRouter } from "react-router-dom";
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Dashboard } from "./Dashboard";

Enzyme.configure({ adapter: new Adapter() });
describe('test the deshboard component', () => {
    test('renders the deshboard component', () => {
        const component = shallow(<BrowserRouter>
            <Dashboard />
        </BrowserRouter>)
        const div = component.find('div');
        expect(div.contains('img'));
    });
})

