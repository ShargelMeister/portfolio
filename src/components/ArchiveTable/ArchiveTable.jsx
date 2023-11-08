import React from 'react'
import {Link} from "react-router-dom"


export default function Choice() {
  return (
    <div className="App">
      <ProductTable
        data={[
          { id: 1, test: 'Тест на выгорание', option: 'Выгорание', num: 236, proc: 15, date: '2023.12.20'},
          { id: 2, test: 'Тест на агрессию', option: 'Агрессия', num: 2, proc: 78, date: '2023.03.14' },
          { id: 3, test: 'Тест для новичков', option: 'Позитив', num: 190, proc: 90, date: '2023.10.30' },
          { id: 4, test: 'Работа в команде', option: 'Командность', num: 6, proc: 13, date: '2023.09.12'},
        ]}
      />
    </div>
  );
}

const showAnswers = () => {

}

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);



  const requestSort = (key) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

const ProductTable = (props) => {
  const { items, requestSort, sortConfig } = useSortableData(props.data);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  return (
    <table>
      <thead>
        <tr>
        <th>
            <button
              type="button"
              onClick={() => requestSort('id')}
              className={getClassNamesFor('id')}
            >
              Номер
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('test')}
              className={getClassNamesFor('test')}
            >
              Название теста
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('option')}
              className={getClassNamesFor('option')}
            >
              Качество
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('num')}
              className={getClassNamesFor('num')}
            >
              Количество прохождений
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('proc')}
              className={getClassNamesFor('proc')}
            >
              Средний результат
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('data')}
              className={getClassNamesFor('data')}
            >
              Дата
            </button>
          </th>
          <th>
            <button
              type="button"
            >______</button>
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.test}</td>
            <td>{item.option}</td>
            <td>{item.num}</td>
            <td>{item.proc}%</td>
            <td>{item.date}</td>
            <td><Link to={`/result?${item.id}`}>
                  <button className='resultBut'>results</button>
                </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
