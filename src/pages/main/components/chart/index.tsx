import * as React from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { IProject } from '../../../../public/Interfaces/projects';
import { ITask } from '../../../../public/Interfaces/tasks';
import './styles.scss';

interface ICharComponent {
    tasks: ITask[];
    projects: IProject[];
}

const CharComponent = ({tasks, projects}: ICharComponent) => {

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
                y: Number(`${projects.length}.00`),
                sliced: true,
                selected: true,
                color: 'red',
            }, {
                name: 'Tasks in projects',
                y: Number(`${tasks.length}.00`),
                color: '#4a76a8',
            }]
        }]
    };

    return (
        <div className='main-chart'>
            <div className="main-chart-item">
                <p>Projects  - <span className='red'>{Number(`${projects.length}.00`).toFixed(2)}</span></p>
                <p>Tasks in projects - <span className='blue'>{Number(`${tasks.length}.00`).toFixed(2)}</span></p>
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
