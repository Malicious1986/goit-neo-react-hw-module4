export default function Stat(props) {
  const { name, value } = props;

  return (
    <>
      <li className="font1">
        <span className="capital">{name}</span>
        <span  className="bold">{value}</span>
      </li>
    </>
  );
}
