function H1({ color, children, className }) {
  // let textColor;

  // if (color === "red") {
  //   textColor = "text-red-400";
  // } else {
  //   textColor = "text-white";
  // }

  // const textColor = color === "red" ? "text-red-400" : "text-white";
  return (
    <h1
      className={`text-4xl font-bold ${
        color === "red" ? "text-red-400" : "text-white"
      } ${className}`}
    >
      {children}
    </h1>
  );
}

export default H1;
