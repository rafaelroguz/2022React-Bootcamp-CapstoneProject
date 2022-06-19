import usePagination, { DOTS } from 'hooks/usePagination';
import PropTypes from 'prop-types';
import React from 'react';
import { Container, ControlButton, PageButton, Ul } from './Pagination.styled';

const Pagination = ({
  currentPage,
  pageSize,
  siblingCount = 1,
  totalCount,
  onPageChange,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const handleClickNext = () => onPageChange(currentPage + 1);

  const handleClickPrevious = () => onPageChange(currentPage - 1);

  return (
    <Container>
      <Ul>
        <li>
          <ControlButton
            disabled={currentPage === 1}
            onClick={handleClickPrevious}
          >
            Prev
          </ControlButton>
        </li>
        {paginationRange.map((pageNumber) => {
          if (pageNumber === DOTS) {
            return <li>&#8230;</li>;
          }

          return (
            <PageButton $isActive={currentPage === pageNumber} key={pageNumber}>
              <button onClick={() => onPageChange(pageNumber)}>
                {pageNumber}
              </button>
            </PageButton>
          );
        })}
        <li>
          <ControlButton
            disabled={currentPage === paginationRange.length}
            onClick={handleClickNext}
          >
            Next
          </ControlButton>
        </li>
      </Ul>
    </Container>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  siblingCount: PropTypes.number,
  totalCount: PropTypes.number.isRequired,
  onChangePage: PropTypes.func,
};

export default Pagination;
