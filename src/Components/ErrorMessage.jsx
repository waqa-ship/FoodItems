const ErrorMessage = ({ item }) => {
  return (
    <>
      {item.length === 0 ? (
        <h3 className="text-danger">I am hungry 😋</h3>
      ) : null}
    </>
  );
};

export default ErrorMessage;
