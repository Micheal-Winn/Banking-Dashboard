import React from 'react'
import ReactApexChart from 'react-apexcharts'

const TransactionPieChart = () => {
  return (
    <section className='w-[100%]  bg-white overflow-hidden rounded-lg shadow-lg'>
        <ReactApexChart
            type='donut'
            height={310}
            series={[9,3,10,37]}
            options={{
                labels:["Customers","Accounts","Deposit Account","Transaction"],
                tooltip:{
                    y:{
                        formatter:(val)=>{
                            return `${val} %`
                        }
                    }
                },
                plotOptions:{
                    pie:{
                        donut:{
                            labels:{
                                show:true,
                                total:{
                                    show:true,
                                    fontSize:"20px",
                                    color:"#1D4ED8"
                                }
                            }
                        }
                    }
                },
                dataLabels:{
                    enabled:false
                },
                title:{
                    text:"Pie Chart",
                    style:{
                        fontSize:"18px",
                        fontWeight:"bold"
                    }
                },
                colors:["#1D4ED8","#FE9520","#BE1FE5","#20C394"],
                legend:{
                    position:"right",
                    horizontalAlign:"center",

                },
                stroke:{
                    curve:"smooth"
                }
            }}
        />
    </section>
  )
}

export default TransactionPieChart