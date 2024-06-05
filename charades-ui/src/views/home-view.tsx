import { Link, Outlet } from 'react-router-dom';
export default function HomeView() {
  return (
    <section>
      <div className="flex w-full justify-center align-middle">HOME</div>
      <Link to="/">LINK</Link>
      <Outlet />
    </section>
  );
}
