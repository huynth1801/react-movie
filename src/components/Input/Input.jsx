import "./input.scss";

const Input = (props) => {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      className="dark:bg-black bg-white border-0 dark:text-white text-black rounded-4xl px-6 py-2"
      onChange={props.onChange ? (e) => props.onChange(e) : null}
    />
  );
};

export default Input;
