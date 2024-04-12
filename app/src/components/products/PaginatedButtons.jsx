import { forwardRef } from "react";
import clsx from "clsx";
import { useButtonPagination } from "./hooks/useButtonPagination";

export const PaginatedButtons = forwardRef(({ pagination }, ref) => {
  const scrollRef = ref;

  const { page, setPage, totalPages } = pagination;

  const { totalButtons, handleNextPage, handlePrevPage, handlePageNumber } =
    useButtonPagination(page, setPage, totalPages, scrollRef);

  return (
    <div className="flex gap-1">
      {totalPages > 10 && (
        <button
          onClick={() => handlePrevPage(10)}
          className={clsx(
            "text-white w-12 h-12 text-center rounded-full border border-border transition-all"
          )}
        >
          {`<<`}
        </button>
      )}
      <button
        onClick={() => handlePrevPage(1)}
        className={clsx(
          "text-white w-12 h-12 text-center rounded-full border border-border transition-all"
        )}
      >
        {`<`}
      </button>
      {totalButtons.map((pageNumber, i) => (
        <button
          onClick={() => handlePageNumber(pageNumber)}
          className={clsx(
            "w-12 h-12 text-center rounded-full border border-border transition-all",
            pageNumber + 1 === page
              ? "border-primary text-primary"
              : "text-white"
          )}
          key={i + new Date()}
        >
          {pageNumber + 1 < 10 ? "0" + (pageNumber + 1) : pageNumber + 1}
        </button>
      ))}
      <button
        onClick={() => handleNextPage(1)}
        className={clsx(
          "text-white w-12 h-12 text-center rounded-full border border-border transition-all"
        )}
      >
        {`>`}
      </button>
      {totalPages > 10 && (
        <button
          onClick={() => handleNextPage(10)}
          className={clsx(
            "text-white w-12 h-12 text-center rounded-full border border-border transition-all"
          )}
        >
          {`>>`}
        </button>
      )}
    </div>
  );
});
