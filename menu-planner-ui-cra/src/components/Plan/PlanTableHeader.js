const PlanTableHeader = (props) => {
  const dishTypes = props.dishTypes
  const thStandard = "p-3 text-sm font-semibold tracking-wide text-left";

  return (
    <thead className="bg-red-400 border-b-2 border-black">
      <tr>
        <th className={thStandard}></th>
        <th className={thStandard}>Użytkownik</th>
        {dishTypes.map((dt) => (
          <th key={dt} className={thStandard}>
            {dt}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default PlanTableHeader;
