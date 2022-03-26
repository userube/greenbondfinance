import homeStyles from '../styles/Home.module.css'


const DashboardSummaryCard = ({ title, sumVal, icon }) => {
  return (
    <div className="col-md-4">
        <div className="card dash-widget shadow" style={{ borderRadius: '0.3rem', 
            boxShadow: '0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%) !important'}}>
            <div className="card-body">
                <span className={`${homeStyles.dashWidgetIcon}`}>
                    {/* <FaWallet style={{ verticalAlign: 'initial', marginTop: '15px' }}/> */}
                    { icon }
                </span>
                <div className="dash-widget-info">
                    <span style={{ padding: '8px 0 0 0', fontSize: '15px', fontWeight: '500', color: '#9a9696' }}>{title}</span>
                    <h4 style={{ padding: '4px 0 0 0' }}>
                        <span style={{ fontSize: '26px', fontWeight: '800' }}>₦ {sumVal}</span>
                    </h4>
                </div>
            </div>
        </div>	
    </div>
  )
}

export default DashboardSummaryCard