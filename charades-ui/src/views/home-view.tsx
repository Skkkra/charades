import { Link, Outlet } from 'react-router-dom';

export default function HomeView() {
  return (
    <section>
      <div className="flex justify-center align-middle w-full">HOME</div>
      <Link to="/">LINK</Link>
      <Outlet />
    </section>
  );
}
