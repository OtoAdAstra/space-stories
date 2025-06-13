import Image from "next/image";

interface ImageProps {
  alt: string;
  src: string;
}

const Avatar = ({ alt, src }: ImageProps) => {
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button">
        <div className="w-10 rounded-full select-none">
          <Image
            alt={alt}
            src={src}
            width={44}
            height={44}
            className="rounded-full hover:cursor-pointer hover:opacity-80 transition-opacity duration-200 ease-in-out select-none"
            draggable={false}
          />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a>Profile</a>
        </li>
        <li className="text-red-400">
          <a>Logout</a>
        </li>
      </ul>
    </div>
  );
};

export default Avatar;
