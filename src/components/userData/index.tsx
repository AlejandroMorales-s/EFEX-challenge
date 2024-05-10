import { useUserData } from "./hooks";
import { IoIosArrowDown } from "react-icons/io";

const USER_AVATAR_WIDTH = 35;
const USER_AVATAR_ALT = "user avatar";

const UserData = () => {
  const { userData } = useUserData();

  return (
    <div className="flex gap-4 items-center justify-center">
      <div className="flex gap-2 items-center justify-center">
        <img
          width={USER_AVATAR_WIDTH}
          className="rounded-full overflow-hidden"
          srcSet={userData.avatar}
          alt={USER_AVATAR_ALT}
        />

        <div className="text-gray">
          <p>{userData.name}</p>
          <p className="text-sm">{userData.username}</p>
        </div>
      </div>

      <IoIosArrowDown />
    </div>
  );
};

export default UserData;
