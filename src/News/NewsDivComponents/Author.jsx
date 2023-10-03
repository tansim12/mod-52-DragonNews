import { BsFillBookmarkFill, BsFillShareFill } from "react-icons/bs";

const Author = ({ author }) => {
  return (
    <div className="rounded-t-xl flex items-center justify-between p-3 bg-gray-200 w-full">
      <div className="flex items-center gap-3 ">
        <div>
          <img
            className="w-10 h-10 rounded-full"
            src={author?.img}
            alt={author?.name}
          />
        </div>
        <div>
          <p className="font-extrabold">{author?.name}</p>
          <p className="text-xs">{author?.published_date}</p>
        </div>
      </div>
      <div className="flex items-center text-xl gap-3">
        <BsFillBookmarkFill></BsFillBookmarkFill>
        <BsFillShareFill></BsFillShareFill>
      </div>
    </div>
  );
};

export default Author;
