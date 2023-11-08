import React from 'react'
import StatisticTable from "../../StatisticTable/StatisticTable.jsx"

export const StatisticPage = () => {
    return (
      <div className='Content'>
        <div className="Statistic">
            <div className="StatisticHeader">
                <h1>Статистика тестов</h1>
            </div>
            <div className="StatisticBody">
            </div>
            <StatisticTable/>
            </div>
        </div>
    )
  }