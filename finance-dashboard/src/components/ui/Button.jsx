const Button = ({ children, ...props }) => (
  <button className="px-2 py-1 text-sm rounded hover:bg-gray-100" {...props}>
    {children}
  </button>
);
export default Button;