import Option from "./Option";
import ReactSelect from "react-select";
import { useEffect, useState } from "react";
import React from "react";

const MultiCheckboxSelect = (props : any) => {
  const options = props.options;
  const selected = props.selected;
  const setSelected = props.setSelected;

  const [selectedItems, setSelectedItems] = useState();

  useEffect(() => {
    const initSelectedItems = options.filter((o : any) => selected.includes(o.value))
    setSelectedItems(initSelectedItems);
  },[])

  const handleChange = (selectedItems : any) => {
    setSelectedItems(selectedItems);
    setSelected(selectedItems.map((s : any) => s.value));
  };

  return (
    <span
      className={"d-inline-block inline-block m-1"}
      data-toggle="popover"
      data-trigger="focus"
      data-content="Please selecet account(s)"
    >
      <ReactSelect
        options={options}
        isMulti
        closeMenuOnSelect={false}
        hideSelectedOptions={false}
        components={{
          Option
        }}
        onChange={handleChange}
        //allowSelectAll={false}
        value={selectedItems}
      />
    </span>
  );
};

export default MultiCheckboxSelect;
