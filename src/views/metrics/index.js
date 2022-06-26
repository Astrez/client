import React from 'react'
import MainCard from 'ui-component/cards/MainCard'
import './index.css';
export default function index() {
  return (
    <MainCard title="Metrics Details" styles={{textAlign:'center'}}>
        <center>
        <table>
        <tr>
        <th>cpuUsage</th>
 
        <th>memoryUsage</th>
 
        <th>podName</th>
 
        </tr>
        </table>
        </center>
    </MainCard>
  )
}
