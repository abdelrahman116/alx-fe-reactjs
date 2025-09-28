function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 sm:p-4 sm:max-w-xs md:max-w-sm md:p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg hover:shadow-xl">
      <img
        className="rounded-full hover:scale-110 transition-transform duration-300 ease-in-out md:w-36 md:h-36 sm:w-24 sm:h-24 mx-auto"
        src="https://via.placeholder.com/150"
        alt="User"
      />
      <h1 className="hover:text-blue-500 md:text-xl sm:text-lg text-blue-800 my-4">
        John Doe
      </h1>
      <p className="text-gray-600 md:text-base sm:text-sm">
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
    </div>
  );
}

export default UserProfile;
