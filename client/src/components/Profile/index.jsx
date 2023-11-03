import { useNavigate } from 'react-router-dom';

function Profile({ username, details, handleDeleteClick, handleEditClick }) {
  const isoDate = details.date_registered;
  const date = new Date(isoDate);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  const formattedDate = `${year}-${month}-${day}`;

  const Navigate = useNavigate();

  const navigateToDashboard = () => {
    Navigate('/dashboard');
  };

  return (
    <>
      <div className="text-white p-8 rounded-t-lg shadow-lg w-[50vw] h-[40vh] xl:w-[30vw] relative bg-blue-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10  border-gray-100">
        <h1 className="text-2xl font-bold mb-6 text-center">Profile Page</h1>
        <div className="space-y-4">
          <p className="flex justify-between">
            <span className=" font-bold">Username:</span>
            <span className="font-medium">{username}</span>
          </p>
          <p className="flex justify-between">
            <span className="font-bold">Email:</span>
            <span className="font-medium">{details.email}</span>
          </p>
          <p className="flex justify-between">
            <span className="font-bold">Created At:</span>
            <span className="font-medium">
              {formattedDate || 'Profile not created'}
            </span>
          </p>
          <p className="flex justify-between">
            <span className="font-bold">Total points:</span>
            <span className="font-medium">{details.points}</span>
          </p>
        </div>

        <div className="mt-6 flex justify-between absolute bottom-[15%] gap-2 mb-2 right-[38%] ">
          <button
            onClick={handleEditClick}
            className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
          >
            Update
          </button>
          <button
            onClick={handleDeleteClick}
            className="py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200"
          >
            Delete
          </button>
        </div>
      </div>
      <button
        onClick={navigateToDashboard}
        className="px-4 py-2 w-[50vw] xl:w-[30vw] mt-8  bg-yellow-600 text-white rounded-b-lg hover:bg-blue-700"
      >
        Go to Dashboard
      </button>
    </>
  );
}

export default Profile;
