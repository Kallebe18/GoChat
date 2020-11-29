import React, { useState, useCallback, useRef, useEffect } from 'react';
import {
  TouchableOpacity,
  TextInput
} from 'react-native';
import Fi from 'react-native-vector-icons/Feather';

import { SearchTextInput, SearchTextInputContainer } from './styles';

const SearchContainer: React.FC = () => {
  const textInputRef = useRef<TextInput>(null);
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    textInputRef.current?.focus();
  }, [searching])

  const handleStartSearch = useCallback(() => {
    setSearching(true);
  }, []);

  return (
    <TouchableOpacity
      onPress={handleStartSearch}
      style={{ marginRight: 20, padding: 5}}
    >
      {
        searching
          ? <SearchTextInputContainer>
              <Fi name='search' size={20} color="#555" />
              <SearchTextInput
                ref={textInputRef}
                placeholder="Procure Contatos"
                placeholderTextColor="#555"
                blurOnSubmit={false}
                onBlur={() => setSearching(false)}
              />
            </SearchTextInputContainer>
          : <Fi name="search" size={25} color="#fff"/>
      }
    </TouchableOpacity>
  )
}

export default SearchContainer;
