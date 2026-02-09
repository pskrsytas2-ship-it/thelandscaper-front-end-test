import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-4xl font-bold text-grey-100">404</h1>
      <p className="text-lg text-grey-80">Page not found</p>
      <Link 
        to="/" 
        className="mt-4 px-6 py-2 bg-brand hover:bg-brand/90 text-grey-30 text-sm font-semibold rounded transition-colors"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;
