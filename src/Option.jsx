import React, { Fragment } from 'react';
import Select, { components } from "react-select";

const Option = (props) => {
  return (
    <div className="test-class">
      <components.Option {...props}>
        {
          props.label !== "Select all" ?
          <Fragment>
            <input
              type="checkbox"
              checked={props.isSelected}
            />{' '}
            <label>{props.value} </label>
          </Fragment>
          :
          <Fragment>
            {' '}<label>{props.value} </label>
          </Fragment>
        }
      </components.Option>
    </div>
  );
};

export default Option;
