import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
      <div className="text-center max-w-md w-full">
        <h1 className="text-6xl sm:text-7xl font-extrabold text-red-500 mb-4">
          404
        </h1>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
          Page Not Found
        </h2>

        <p className="text-gray-500 mb-6 text-sm sm:text-base">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>

        <Link href="/">
          <button className="w-full sm:w-auto px-6 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition duration-200">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
