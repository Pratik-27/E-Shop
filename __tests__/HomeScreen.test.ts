import {shallow} from 'enzyme';
import HomeScreen from '../src/screens/HomeScreen';

describe('HomeScreen', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<HomeScreen />);
    expect(wrapper).toHaveLength(1);
    expect(wrapper.find('FlatList').length).toBe(1);
  });

  it('calls the addToCart function when the user clicks on an item', () => {
    const mockAddToCart = jest.fn();
    const wrapper = shallow(<HomeScreen addToCart={mockAddToCart} />);
    wrapper.find('TouchableOpacity').simulate('press');
    expect(mockAddToCart).toBeCalled();
  });

  it('scrolls correctly', () => {
    const wrapper = shallow(<HomeScreen />);
    wrapper.find('FlatList').simulate('scrollToEnd');
    expect(wrapper.find('FlatList').props.scrollToEnd).toBe(true);
  });

  // Fix for the error message "'HomeScreen' refers to a value, but is being used as a type here"
  it('uses the HomeScreen component as a type correctly', () => {
    const wrapper = shallow(<typeof HomeScreen />);
    expect(wrapper).toHaveLength(1);
    expect(wrapper.find('FlatList').length).toBe(1);
  });
});
