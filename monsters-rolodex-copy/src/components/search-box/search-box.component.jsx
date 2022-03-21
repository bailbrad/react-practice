import './search-box.styles.css';

const SearchBox = ({className, placeholder, onChangeHandler}) => (
  <input //want input to be more generic
    className={`search-box ${className}`} //js string interpolation?
    //allows there to be 2 classes - search-box and monsters-search-box -- important for styling
    type='search' 
    placeholder= {placeholder}
    onChange={onChangeHandler}
  />
)

export default SearchBox;