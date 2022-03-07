import React from "react";

const Table = (props : any) => {
  return <table className="w-full">{props.children}</table>;
};

export default Table;
