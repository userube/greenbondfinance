import Layout from "../components/Layout"
import {FaWallet} from 'react-icons/fa'
import {BsFillPiggyBankFill} from 'react-icons/bs'
import {BsBarChartFill} from 'react-icons/bs'
import DashboardSummaryCard from "../components/DashboardSummaryCard"
import homeStyles from '../styles/Home.module.css'

import React from 'react';
import {
    Chart as ChartJS,
    ArcElement,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    ArcElement,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top'
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Payments',
            data: [1500000, 3000000, 190000, 2700000, 1000000, 2000000, 1500000],
            backgroundColor: '#a2c546',
        },
        {
            label: 'Loans',
            data: [1000000, 2500000, 1140000, 1700000, 4000000, 2450000, 3500000],
            backgroundColor: '#fda8b9',
        },
    ],
};



// -----------------------------------------------------

export const dataPie = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };


const home = () => {
    return (
        <>
            <Layout pageTitle='Dashboard'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="mt-4">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="card dash-widget shadow" style={{ borderRadius: '0.3rem', 
                                            boxShadow: '0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%) !important'}}>
                                            <div className="card-body">
                                                <span className={`${homeStyles.dashWidgetIcon}`}>
                                                    <FaWallet style={{ verticalAlign: 'initial', marginTop: '15px' }}/>
                                                </span>
                                                <div className="dash-widget-info">
                                                    <span style={{ padding: '8px 0 0 0', fontSize: '15px', fontWeight: '500', color: '#9a9696' }}>Total Balance</span>
                                                    <h4 style={{ padding: '4px 0 0 0' }}>
                                                        <span style={{ fontSize: '26px', fontWeight: '800' }}>₦ 450,000</span>
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>	
                                    </div>
                                    <DashboardSummaryCard title={"Loans"} sumVal={"1,000,000"} icon={<BsFillPiggyBankFill style={{ verticalAlign: 'initial', marginTop: '15px' }}/>}/>
                                    <DashboardSummaryCard title={"Investments"} sumVal={"4,000,000"} icon={<BsBarChartFill style={{ verticalAlign: 'initial', marginTop: '15px' }}/>}/>
                                </div>
                            </div>
                            <div className="mt-4">

                                <div className="card dash-widget shadow" style={{ borderRadius: '0.3rem', 
                                    boxShadow: '0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%) !important'}}>
                                    <div className="card-body">
                                        <h5>Loans & Payments Summary</h5>
                                        <Bar options={options} data={data}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="mt-4">
                                <div className={`card dash-widget shadow`} style={{ borderRadius: '0.3rem', 
                                    boxShadow: '0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%) !important'}}>
                                    <div className="card-body">
                                        <h5>Activities</h5>
                                        <Pie data={dataPie} />

                                        <hr/>

                                        <h5 className="mt-2 mb-2">Statistics</h5>
                                        <div className="stats-list">
											<div className={`${homeStyles.statsInfo}`}>
												<p style={{color: '#55ce63'}}>Total Transfer
													<strong>
														<span className="float-right"> 45</span>
													</strong>
												</p>
												<p className="text-right">
													<span className="float-right">₦ 500,000</span>
												</p>
											</div>
											<div className={`${homeStyles.statsInfo}`}>
												<p style={{color: 'orange'}}>Inter Transfers <strong> 65 </strong></p>
												<p className="text-right"><span>₦ 500,000</span></p>
											</div>
											<div className={`${homeStyles.statsInfo}`}>
												<p style={{color: 'brown'}}>Payments <strong> 76</strong></p>
												<p className="text-right"><span>₦ 600,000</span></p>
											</div>
											<div className={`${homeStyles.statsInfo}`}>
												<p style={{color: 'red'}}>Defaults <strong> 34</strong></p>
                                                <p className="text-right"><span>₦ 600,000</span></p>
											</div>
										</div>
                                    </div>
                                </div>	
                            </div>
                        </div>
                    </div>

                    <br/>
                    <hr/>

                    <div className="row">
                        <div className="col-md-6">
                            <h5>Loans</h5>
                            <table className='table' style={{boxShadow: '0 0.1rem 1rem rgb(0 0 0 / 15%) !important', 
                                color: '#2f3439 !important', fontSize: '13px', fontWeight: '500' }}>
                                <thead style={{ background: '#a2c546', color: '#000' }}>
                                    <tr>
                                        <th>Receipt #</th>
                                        <th>Amount</th>
                                        <th>Date</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody style={{ background: '#a2c54612' }}>
                                    <tr>
                                        <td>INSP-RF0000000088</td>
                                        <td>₦ 250,000</td>
                                        <td>2022-01-10 00:04:23	</td>
                                        <td>Pending</td>
                                    </tr>
                                    <tr>
                                        <td>INSP-RF0000000088</td>
                                        <td>₦ 250,000</td>
                                        <td>2022-01-10 00:04:23	</td>
                                        <td>Pending</td>
                                    </tr>
                                    <tr>
                                        <td>INSP-RF0000000088</td>
                                        <td>₦ 250,000</td>
                                        <td>2022-01-10 00:04:23	</td>
                                        <td>Pending</td>
                                    </tr>
                                    <tr>
                                        <td>INSP-RF0000000088</td>
                                        <td>₦ 250,000</td>
                                        <td>2022-01-10 00:04:23	</td>
                                        <td>Pending</td>
                                    </tr>
                                    <tr>
                                        <td>INSP-RF0000000088</td>
                                        <td>₦ 250,000</td>
                                        <td>2022-01-10 00:04:23	</td>
                                        <td>Pending</td>
                                    </tr>
                                    <tr>
                                        <td>INSP-RF0000000088</td>
                                        <td>₦ 250,000</td>
                                        <td>2022-01-10 00:04:23	</td>
                                        <td>Pending</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <button className="btn btn-sm btn-success">More</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-md-6">
                            <h5>Payments</h5>
                            <table className='table' style={{boxShadow: '0 0.1rem 1rem rgb(0 0 0 / 15%) !important', 
                                color: '#2f3439 !important', fontSize: '13px', fontWeight: '500' }}>
                                <thead style={{ background: '#a2c546', color: '#000' }}>
                                    <tr>
                                        <th>Receipt #</th>
                                        <th>Amount</th>
                                        <th>Date</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody style={{ background: '#a2c54612' }}>
                                    <tr>
                                        <td>INSP-RF0000000088</td>
                                        <td>₦ 250,000</td>
                                        <td>2022-01-10 00:04:23	</td>
                                        <td>Pending</td>
                                    </tr>
                                    <tr>
                                        <td>INSP-RF0000000088</td>
                                        <td>₦ 250,000</td>
                                        <td>2022-01-10 00:04:23	</td>
                                        <td>Pending</td>
                                    </tr>
                                    <tr>
                                        <td>INSP-RF0000000088</td>
                                        <td>₦ 250,000</td>
                                        <td>2022-01-10 00:04:23	</td>
                                        <td>Pending</td>
                                    </tr>
                                    <tr>
                                        <td>INSP-RF0000000088</td>
                                        <td>₦ 250,000</td>
                                        <td>2022-01-10 00:04:23	</td>
                                        <td>Pending</td>
                                    </tr>
                                    <tr>
                                        <td>INSP-RF0000000088</td>
                                        <td>₦ 250,000</td>
                                        <td>2022-01-10 00:04:23	</td>
                                        <td>Pending</td>
                                    </tr>
                                    <tr>
                                        <td>INSP-RF0000000088</td>
                                        <td>₦ 250,000</td>
                                        <td>2022-01-10 00:04:23	</td>
                                        <td>Pending</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <button className="btn btn-sm btn-success">More</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default home