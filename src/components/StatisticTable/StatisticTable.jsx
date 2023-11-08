import React from 'react'
  
export default function Choice() {
  return (
    <div className="App">
      <ProductTable
        data={[
          { id: 1, name: 'Григорьев', test: 'Тест для новичков', option: 'Позитив', proc: 15, date: '20.12.2023' },
          { id: 2, name: 'Парьев', test: 'Тест на агрессию', option: 'Агрессия', proc: 78, date: '10.12.2023' },
          { id: 3, name: 'Фломенко', test: 'Тест для новичков', option: 'Позитив', proc: 90, date: '12.12.2023' },
          { id: 4, name: 'Кирская', test: 'Работа в команде', option: 'Командность', proc: 13, date: '29.12.2023'},
        ]}
      />
    </div>
  );
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
              onClick={() => requestSort('name')}
              className={getClassNamesFor('name')}
            >
              Фамилия И.О.
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
              onClick={() => requestSort('proc')}
              className={getClassNamesFor('proc')}
            >
              Результат
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
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.test}</td>
            <td>{item.option}</td>
            <td>{item.proc}%</td>
            <td>{item.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
