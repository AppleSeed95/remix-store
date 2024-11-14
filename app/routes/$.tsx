import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-[3rem] font-bold">404 - Page Not Found</h1>
      <p className="mt-4 text-[1.2rem]">
        Sorry, the page you’re looking for doesn’t exist.
      </p>
      <Link to="/" className="mt-6 text-[1.4rem] text-blue-500 hover:underline">
        Go back to Home
      </Link>
    </div>
  );
}