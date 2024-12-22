import { useTranslation } from "react-i18next";
import SearchIcon from "../../icons/SearchIcon";
import classes from "./SearchBar.module.scss"
const SearchBar = () => {
    const {t} = useTranslation()
  return (
    <div className={classes.SearchBarContainer}>
      <SearchIcon />
      <input type="text" placeholder={t("Search")} />
    </div>
  );
};

export default SearchBar;
