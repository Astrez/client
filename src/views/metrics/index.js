import React from 'react'
import MainCard from 'ui-component/cards/MainCard'

export default function index() {
  return (
    <MainCard title="Metrics Details" styles={{textAlign:'center'}}>
        <center>
        <table  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>
        <tr>
        <th>cpuUsage</th>
        <td></td>
        <th>memoryUsage</th>
        <td></td>
        <th>podName</th>
        <td></td>
        </tr>
        </table>
        </center>
    </MainCard>
  )
}
