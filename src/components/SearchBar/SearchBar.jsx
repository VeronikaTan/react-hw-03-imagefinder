
import { Component } from "react";
import PropTypes from "prop-types";
import s from "./SearchBar.module.css"
import { ReactComponent as SearchIcon } from "../../icons/icon-search.svg"

class SearchBar extends Component {
state = {
        query: ""
    }
  

  handleChange = ({target}) => {
        const {name, value} = target;
        this.setState({
            [name]: value
        })
    }

    onFormSubmit = (e)=> {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.reset()
    }

    reset(){
        this.setState({query: ""})
    }

  render() {
      
        const {query} = this.state;
        const {handleChange, onFormSubmit} = this;
        return (
            <header className={s.searchBar}>
                <form onSubmit={onFormSubmit} className={s.form}>
    <button type="submit" className={s.btnSearch}>
      <span className={s.btnLabel}><SearchIcon width="20" height="20" className={s.svg} /></span>
              </button>
              <input
                className={s.input} onChange={handleChange} name="query" value={query}
      type="text"
      placeholder="Search images and photos"
    />
  </form>
</header>
        )
    }
}

export default SearchBar;

SearchBar.propTypes = {
  changeQuery: PropTypes.func
}