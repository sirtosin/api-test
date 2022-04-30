import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import axios from "axios";

const People = () => {
  const Api_Url = "https://swapi.dev/api/people/?page=";
  const [info, setInfo] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const handlePageClick = async (data) => {
    // console.log(data.selected);
    let currentPage = data.selected + 1;
    setPage(currentPage);
    console.log("page", currentPage);
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(async () => {
      const resp = await axios
        .get(Api_Url + page)
        .then((response) => {
          if (response.status === 200) {
            console.log("response", response);
            setInfo(response.data.results);
            setLoading(false);
          } else {
            setLoading(true);
          }
        })
        .catch((err) => console.log(err));
    }, 1000);
  }, [page]);

  return (
    <main className="flex items-start">
      {!loading ? (
        <>
          <section>
            <h3 className="text-xl font-semibold m-3 capitalize">
              current page {page}
            </h3>
            <section className="flex flex-col items-center justify-center lg:flex-row flex-wrap">
              {info?.map((item, index) => (
                <section
                  key={index + item.name}
                  className=" w-[300px] h-[250px] bg-white shadow-lg rounded-md m-5 p-5 transition-all duration-150 ease-out hover:scale-110"
                >
                  <img
                    className="w-full  h-[100px] object-cover"
                    src="https://joeschmoe.io/api/v1/random"
                  />
                  <h3 className="text-2xl font-bold capitalize">{item.name}</h3>
                  <h3 className="text-md font-medium">gender: {item.gender}</h3>
                  <h3 className="text-sm font-light text-gray-600">
                    height: {item.height}cm
                  </h3>
                  <h3 className="text-xs text-gray-400 font-semibold ">
                    skin_color: {item.skin_color}
                  </h3>
                </section>
              ))}
            </section>

            <ReactPaginate
              previousLabel={"previous"}
              nextLabel={page >= 6 ? "last" : "next"}
              pageCount={6}
              breakLabel={"..."}
              marginPagesDisplayed={2}
              pageRangeDisplayed={2}
              onPageChange={handlePageClick}
              containerClassName={
                "flex items-center justify-center flex-wrap  w-[300px] p-6"
              }
              pageClassName={
                "border p-3 m-2 rounded-md cursor-pointer hover:bg-gray-200"
              }
              pageLinkClassName={"font-bold "}
              previousClassName={
                "bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded border-none outline-none "
              }
              previousLinkClassName={
                "bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded border-none outline-none"
              }
              nextClassName={
                "bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded border-none outline-none"
              }
              nextLinkClassName={
                "bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded border-none outline-none"
              }
              breakClassName={""}
              breakLinkClassName={""}
              // activeLinkClassName={"bg-gray-200"}
              activeClassName={"bg-gray-200"}
              forcePage={page - 1}
            />
          </section>
        </>
      ) : (
        <h3 className="text-5xl font-bold mx-auto flex items-center justify-center h-screen capitalize ml-2 md:ml-[6em]">
          loading..
        </h3>
      )}
    </main>
  );
};

export default People;
