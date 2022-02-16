const ErrorAlert = () => {
  return (
    <div
      className="px-4 py-3 text-center bg-white border rounded text-error border-error"
      role="alert"
    >
      <strong className="font-bold">Holy smokes!&nbsp;</strong>
      <span className="block sm:inline">
        Something seriously bad happened.&nbsp;
      </span>
      <span className="block sm:inline">Trying to reconnect the server...</span>
    </div>
  );
};

export default ErrorAlert;
