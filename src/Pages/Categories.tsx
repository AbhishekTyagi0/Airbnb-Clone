function Categories() {
  return (
    <div className="w-full h-[800px] bg-gray-100">
      <p className="pl-10 pt-16 font-semibold text-xl mt-16">
        Inspiration for future getaways
      </p>
      <div className="flex gap-5 pl-10 pt-5 font-semibold text-gray-500">
        <button>Popular</button>
        <button>Arts & Culture</button>
        <button>Outdoors</button>
        <button>Mountains</button>
        <button>Beach</button>
        <button>Unique stays</button>
        <button>Categories</button>
        <button>Things to do</button>
      </div>
      <hr className="border border-gray-300 my-4 mx-10" />
      <div className="h-[200px]"></div>
      <hr className="border border-gray-200" />
    </div>
  );
}

export default Categories;
