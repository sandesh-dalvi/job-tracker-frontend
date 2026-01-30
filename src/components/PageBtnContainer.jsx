import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../features/allJobs/allJobsSlice";

const PageBtnContainer = () => {
  const { numOfPages, page } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();

  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });

  const nextPage = () => {
    let newPage = page + 1;
    if (newPage > numOfPages) {
      newPage = 1;
    }
    dispatch(changePage(newPage));
  };
  const prevPage = () => {
    let newPage = page - 1;
    if (newPage < 1) {
      newPage = numOfPages;
    }
    dispatch(changePage(newPage));
  };

  return (
    <div className=" h-24 mt-8 flex items-center justify-end flex-wrap gap-4">
      <button
        type="button"
        className=" w-25 h-10 bg-surface rounded-lg text-secondary capitalize flex items-center justify-center gap-2 cursor-pointer transition-all duration-300"
        onClick={prevPage}
      >
        <HiChevronDoubleLeft /> prev
      </button>
      <div className=" bg-primary-light rounded-lg">
        {pages.map((pageNumber) => (
          <button
            className={`w-12 h-10 font-bold text-xl ${pageNumber === page ? " bg-secondary text-surface" : "text-secondary"} transition-all duration-300 rounded-lg cursor-pointer`}
            key={pageNumber}
            type="button"
            onClick={() => dispatch(changePage(pageNumber))}
          >
            {pageNumber}
          </button>
        ))}
      </div>
      <button
        type="button"
        className=" w-25 h-10 bg-surface rounded-lg text-secondary capitalize flex items-center justify-center gap-2 cursor-pointer transition-all duration-300"
        onClick={nextPage}
      >
        <HiChevronDoubleRight /> next
      </button>
    </div>
  );
};

export default PageBtnContainer;
