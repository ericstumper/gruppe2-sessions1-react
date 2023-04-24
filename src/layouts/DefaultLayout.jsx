import Navigation from "../components/Navigation";

function DefaultLayout({ children }) {
  return (
    <div className="bg-slate-800 text-white">
      {children}
      <Navigation />
    </div>
  );
}

export default DefaultLayout;
