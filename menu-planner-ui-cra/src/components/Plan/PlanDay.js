import useDateExtension from "../../hooks/extensions/useDateExtension";
import PlanUser from "./PlanUser";

const PlanDay = (props) => {
  const dateExtension = useDateExtension();
  const date = props.date;
  const dishes = props.dishes;
  const users = props.users;
  const dishTypes = props.dishTypes;

  const className = "p-3 text-sm text-gray-700 whitespace-nowrap";
  const view = users.map((u, index) => (
    <tr className="bg-gray-50" key={u}>
      {index === 0 && (
        <td rowSpan={users.length} className={className}>
          <div>{dateExtension.getDayName(date)}</div>
          <div>({dateExtension.toDateString(date)})</div>
        </td>
      )}
      {
        <PlanUser
          key={index}
          date={date}
          dishTypes={dishTypes}
          user={u}
          dishes={dishes.filter((d) => d.userId === u)}
        />
      }
    </tr>
  ));

  return view;
};

export default PlanDay;
