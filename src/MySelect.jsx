import React from "react";
import PropTypes from "prop-types";
import { default as ReactSelect } from "react-select";

const MySelect = props => {
  console.log("MySelect Props: ", props);
  if (props.allowSelectAll) {
    return (
      <ReactSelect
        {...props}
        options={[props.allOption, ...props.options]}
        onChange={selected => {
          if (
            selected !== null &&
            selected.length > 0 &&
            selected[selected.length - 1].value === props.allOption.value
          ) {
            let selectedOptionsArr = []
            props.options.map(opt => {
              selectedOptionsArr.push(...opt.options);
            })
            return props.onChange(selectedOptionsArr);
          }
          return props.onChange(selected);
        }}
      />
    );
  }

  return <ReactSelect {...props} />;
};

MySelect.propTypes = {
  options: PropTypes.array,
  value: PropTypes.any,
  onChange: PropTypes.func,
  allowSelectAll: PropTypes.bool,
  allOption: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string
  })
};

MySelect.defaultProps = {
  allOption: {
    label: "Select all",
    value: "Select all"
  }
};

export default MySelect;
