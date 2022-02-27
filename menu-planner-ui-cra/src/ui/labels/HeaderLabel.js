const HeaderLabel = (props) => {
  return (
    <div className="p-5 text-black text-3xl tracking-widest text-center">
      {props.children}
    </div>
  );
};

export default HeaderLabel;