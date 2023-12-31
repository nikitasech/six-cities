import cn from 'classnames';
import { useState } from 'react';
import { useAppSelector } from '../../hooks/use-app-selector';
import { filters } from '../../const';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { FilterName } from '../../types/filter-name';
import { setActiveFiter } from '../../store/actions';

export default function Sort(): JSX.Element {
  const dispatch = useAppDispatch();
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const activeSort = useAppSelector((state) => state.activeFilter);

  const listClasses = cn('places__options places__options--custom', {
    'places__options--opened': isOpened
  });

  const handleSortClick = () => {
    setIsOpened(!isOpened);
  };

  const getHandleOptionClick = (filter: FilterName) => () => {
    dispatch(setActiveFiter(filter));
    setIsOpened(!isOpened);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleSortClick}>
        {activeSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={listClasses}>
        {
          filters.map((filter) => {
            const optionClasses = cn('places__option', {
              'places__option--active': filter === activeSort
            });

            return <li className={optionClasses} key={filter} tabIndex={0} onClick={getHandleOptionClick(filter)}>{filter}</li>;
          })
        }
      </ul>
    </form>
  );
}
