import React from 'react';
import './App.css';
import Form from './components/Form';
import { food, title, fat, satFat, sugar, salt, liq_fat, liq_satFat, liq_sugar, liq_salt, colTitle } from './constants/constants';

function App() {
  return (<div className="container forms-container ">
    <div className="row h-100">
      <div className="col-sm">
        <Form label={food}
          title={title.labelFood}
          colTitle={colTitle.title}
          className="formFood"
          fatMaxFood={fat.fatMaxFood}
          fatMediumFood={fat.fatMediumFood}
          fatMinFood={fat.fatMinFood}
          satFatMaxFood={satFat.satFatMaxFood}
          satFatMediumFood={satFat.satFatMediumFood}
          satFatMinFood={satFat.satFatMinFood}
          maxSugar={sugar.maxSugar}
          mediumSugar={sugar.mediumSugar}
          minSugar={sugar.minSugar}
          maxSalt={salt.maxSalt}
          mediumSalt={salt.mediumSalt}
          minSalt={salt.minSalt}
        />
      </div>
      <div className="col-sm">
        <Form label={food}
          title={title.labelBeberage}
          colTitle={colTitle.title2}
          className="formDrink"
          fatMaxFood={liq_fat.fatMaxFood}
          fatMediumFood={liq_fat.fatMediumFood}
          fatMinFood={liq_fat.fatMinFood}
          satFatMaxFood={liq_satFat.satFatMaxFood}
          satFatMediumFood={liq_satFat.satFatMediumFood}
          satFatMinFood={liq_satFat.satFatMinFood}
          maxSugar={liq_sugar.maxSugar}
          mediumSugar={liq_sugar.mediumSugar}
          minSugar={liq_sugar.minSugar}
          maxSalt={liq_salt.maxSalt}
          mediumSalt={liq_salt.mediumSalt}
          minSalt={liq_salt.minSalt}
        />
      </div>
    </div>
  </div>);
}
export default App;

