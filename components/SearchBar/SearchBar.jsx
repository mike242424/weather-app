import { TextInput } from 'react-native';
import { style } from './SearchBar.style';

const SearchBar = ({ onSubmit }) => {
  return (
    <TextInput
      onSubmitEditing={(e) => onSubmit(e.nativeEvent.text)}
      style={style.input}
      placeholder="Type a City... Ex. Atlanta"
    />
  );
};

export default SearchBar;
