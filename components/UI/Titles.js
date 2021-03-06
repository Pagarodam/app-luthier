const Titles = ({
  label,
  className = 'text-2xl rounded-l-lg mt-24 p-8 bg-blue-700 text-center font-bold leading-7 text-white-900  sm:text-3xl sm:truncate',
}) => {
  return <h1 className={className}>{label}</h1>;
};

export default Titles;
