import ReactPaginate from 'react-paginate';
import { PaginationStyles } from './styles/PaginationStyle';

import { useRouter } from 'next/router';

const Pagination = ({ content }) => {
  const router = useRouter();

  const paginationHandler = (page) => {
    const currentPath = router.pathname;
    const currentQuery = router.query;
    currentQuery.page = page.selected + 1;

    router.push({
      pathname: currentPath,
      query: currentQuery,
    });
  };

  return (
    <PaginationStyles>
      <ReactPaginate
        previousLabel={'← Previous'}
        nextLabel={'Next →'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        activeClassName={'active'}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        initialPage={content.page}
        pageCount={10}
        marginPagesDisplayed={3}
        pageRangeDisplayed={4}
        onPageChange={paginationHandler}
      />
    </PaginationStyles>
  );
};

export default Pagination;