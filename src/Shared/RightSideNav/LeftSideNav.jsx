import { useEffect, useState } from "react";

const LeftSideNav = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await fetch("categories.json")
        const data = await res.json();
        setCategory(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCategory();
  }, []);
  return (
    <section>
      <h1 className="font-semibold">All Category</h1>
      <div className="">
        <p className="text-center px-3 py-2 bg-gray-200 my-5 rounded-md">National News </p>
        <div className="flex justify-center">
        <div className="">
          {category.map((item) => (
            <div className="my-3" key={item?.id}>
              <button className="btn btn-outline border-none"> {item?.name} </button>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default LeftSideNav;
