import * as React from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import './styles.scss';

const options: Highcharts.Options = {
    chart: {
        plotShadow: false,
        type: 'pie'
    },
    title: {
      text: ''
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        type: 'pie',
        data: [{
            name: 'Projects',
            y: 4.00,
            sliced: true,
            selected: true,
            color: 'red',
        }, {
            name: 'Tasks in projects',
            y: 123.00,
            color: '#4a76a8',
        }]
    }]
};

const CharComponent = () => {

    return (
        <div className='main-chart'>
            <div className="main-chart-item">
                <p>Projects  - <span className='red'>4</span></p>
                <p>Tasks in projects - <span className='blue'>123</span></p>
            </div>
            <div className="main-chart-item">
                <HighchartsReact
                    highcharts={Highcharts}
                    options={options}
                />
            </div>
        </div>
    );
}

export default CharComponent;
