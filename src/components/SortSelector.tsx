const SortSelector = () => {
  return (
    <>
      <div className="w-40">
        <h3 className="mb-2 font-semibold text-lg px-2">Order By:</h3>
        <details className="dropdown w-full px-2">
          <summary className="btn btn-primary w-full h-12">Relevance</summary>
          <ul className="menu dropdown-content bg-primary text-primary-content rounded-box z-10 w-full p-2 shadow-sm">
            <li>
              <a className="hover:bg-blue-700 w-full h-12">Relevance</a>
              <a className="hover:bg-blue-700 w-full h-12">Date Added</a>
              <a className="hover:bg-blue-700 w-full h-12">Name</a>
              <a className="hover:bg-blue-700 w-full h-12">Release Date</a>
              <a className="hover:bg-blue-700 w-full h-12">Popularity</a>
              <a className="hover:bg-blue-700 w-full h-12">Average Rating</a>
            </li>
          </ul>
        </details>
      </div>
    </>
  );
};

export default SortSelector;
