import { ChangeEventHandler } from "react";
import "./search-box.styles.css";

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onSearchHandler: ChangeEventHandler<HTMLInputElement>;
};
/* type vs interface, generic types given by react */

const SearchBox = ({
  className,
  placeholder,
  onSearchHandler,
}: SearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onSearchHandler}
  />
);

export default SearchBox;
