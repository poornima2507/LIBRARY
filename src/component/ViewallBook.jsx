import React from 'react'
import NavBar from './NavBar'

const ViewallBook = () => {
  return (
    <div>
<NavBar/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

        <table class="table">
  <thead>
    <tr>
      <th scope="col">TITLE</th>
      <th scope="col">AUTHOR</th>
      <th scope="col">PUBLISHER</th>
      <th scope="col">PRICE</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>PATHUMAYUDE AADU</td>
      <td>V M BASHEER</td>
      <td>700</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>NAYIKA</td>
      <td>VINOD NARAYAN</td>
      <td>700</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>THE HILL WE CLIMB</td>
      <td>AMANDA GORMAN</td>
      <td>700</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>NAYIKA</td>
      <td>VINOD NARAYAN</td>
      <td>700</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>FIRE DANCE</td>
      <td>ILANA C MYER</td>
      <td>700</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>UNFINISHED</td>
      <td>PRIYANKA CHOPRA JONES</td>
      <td>700</td>
    </tr>
  </tbody>
</table>

        </div>
    </div>
</div>

    </div>
  )
}

export default ViewallBook