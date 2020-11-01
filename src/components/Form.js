import React, { useState, useRef, useEffect, Fragment } from 'react';
import './Form.css';
import functions from '../functions/functions';
import Modal from './Modal';
import { alimentos, bebidas } from '../constants/constants';

const Form = (props) => {
    //console.log(props, " props");
    var validationOfFatSolids, validationOfSaturSolids, validationOfSugarSolids, validationOfSaltSolids
    var validationOfFat, validationOfSatur, validationOfSugar, validationOfSalt;

    const whichFormRef = useRef();
    const fatRef = useRef(); // ref select fat
    const saturRef = useRef();// ref select satfat
    const sugarRef = useRef();// ref select sugar
    const saltyRef = useRef();// ref select salt

    //solid food states
    const [fatOption, setFatOption] = useState(props.fatMaxFood);
    const [satFatOption, setSatFatOption] = useState(props.satFatMaxFood);
    const [sugarOption, setSugarOption] = useState(props.maxSugar);
    const [saltOption, setSaltOption] = useState(props.maxSalt);

    //liquid food states
    const [fatBeb, setFatBeb] = useState(props.fatMaxFood);
    const [satFatBeb, setSatFatBeb] = useState(props.satFatMaxFood);
    const [sugarOptionBeb, setSugarOptionBeb] = useState(props.maxSugar);
    const [saltOptionBeb, setSaltOptionBeb] = useState(props.maxSalt);

    const [activate, setActivate] = useState(false);
    const [stroutp, setStrOutp] = useState(''); //string do outp
    const [stringDrinkOutput, setStringDrinkOutput] = useState('');  //output
    const [fOutp, setFOutp] = useState('');  //output
    const [satfOutp, setSatFOutp] = useState('');  //output
    const [sugOutp, setSugFOutp] = useState('');  //output
    const [salOutp, setSalFOutp] = useState('');  //output
    const [formIsFood, setFormIsFood] = useState(false);
    const [formIsDrink, setFormIsDrink] = useState(false);

    const out = useRef();
    const toggle = () => {
        activate ? setActivate(false) : setActivate(true);
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    const handleClickOutside = event => {
        if (out.current && !out.current.contains(event.target)) {
            setActivate(false);
        }
    };

    const handleChange = () => {
        //  console.log(whichFormRef.current.innerText, 'whichFormRef');
        if (whichFormRef.current.innerText.startsWith(alimentos)) {
            setFatOption(fatRef.current.value);
            setSatFatOption(saturRef.current.value);
            setSugarOption(sugarRef.current.value);
            setSaltOption(saltyRef.current.value);
        }
        else if (whichFormRef.current.innerText.startsWith(bebidas)) {
            setFatBeb(fatRef.current.value);
            setSatFatBeb(saturRef.current.value);
            setSugarOptionBeb(sugarRef.current.value);
            setSaltOptionBeb(saltyRef.current.value);
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        var arrayComValoresRetornados = [];
        var valorRetornado;
        var gordura;
        var gordSat;
        var acuc;
        var sal;
        var possibilities = [];

        if (whichFormRef.current.innerText.startsWith(bebidas)) {
            possibilities = [fatBeb, satFatBeb, sugarOptionBeb, saltOptionBeb];
            for (var x = 0; x < possibilities.length; x++) {
                valorRetornado = functions.validateIfNumeric(possibilities[x]);
                arrayComValoresRetornados.push(valorRetornado);
            }
            //for legibility purposes only:
            gordura = arrayComValoresRetornados[0]
            gordSat = arrayComValoresRetornados[1];
            acuc = arrayComValoresRetornados[2];
            sal = arrayComValoresRetornados[3];

            validationOfFat = functions.checkNutritionalValue(gordura);
            validationOfSatur = functions.checkSaturFats(gordSat);
            validationOfSugar = functions.checkSugar(acuc); //aqui
            validationOfSalt = functions.checkSalt(sal);//aqui

            setStringDrinkOutput('A bebida selecionada possui: ');
            setFOutp(validationOfFat);
            setSatFOutp(validationOfSatur);
            setSugFOutp(validationOfSugar);
            setSalFOutp(validationOfSalt);
            setFormIsFood(false);
            setFormIsDrink(true);
        }


        if (whichFormRef.current.innerText.startsWith(alimentos)) {
            possibilities = [fatOption, satFatOption, sugarOption, saltOption];
            for (var x = 0; x < possibilities.length; x++) {
                valorRetornado = functions.validateIfNumeric(possibilities[x]);
                arrayComValoresRetornados.push(valorRetornado);
            }
            //for legibility purposes only:
            gordura = arrayComValoresRetornados[0]
            gordSat = arrayComValoresRetornados[1];
            acuc = arrayComValoresRetornados[2];
            sal = arrayComValoresRetornados[3];


            validationOfFatSolids = functions.checkNutritionalValueSolids(gordura);
            validationOfSaturSolids = functions.checkSaturFatsSolids(gordSat);
            validationOfSugarSolids = functions.checkSugarSolids(acuc); //aqui
            validationOfSaltSolids = functions.checkSaltSolids(sal);//aqui

            setStrOutp('O alimento selecionado possui: ');
            setFOutp(validationOfFatSolids);
            setSatFOutp(validationOfSaturSolids);
            setSugFOutp(validationOfSugarSolids);
            setSalFOutp(validationOfSaltSolids);
            setFormIsFood(true);
            setFormIsDrink(false);
        }
        toggle();
    }


    return (
        <Fragment>
            <div class="container">
                <div class="row">
                    <div class="col-sm">
                        <div ref={out}>
                            <form className="theform" ref={whichFormRef}>
                                <h2>{props.colTitle}</h2>
                                <label htmlFor="inputs"
                                    className="title">{props.title}</label>

                                <div className="form-group">
                                    <label htmlFor="fat" className="label-select">{props.label.label1}</label>
                                    <div className="col">
                                        <select className="form-control " id="fat" onChange={handleChange} ref={fatRef}>
                                            <option className="opt" value={props.fatMaxFood} >{props.fatMaxFood}</option>
                                            <option className="opt" value={props.fatMediumFood} >{props.fatMediumFood}</option>
                                            <option className="opt" value={props.fatMinFood}>{props.fatMinFood}</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="saturatedFat" className="label-select">{props.label.label2}</label>
                                    <div className="col">
                                        <select className="form-control"
                                            id="saturatedFat"
                                            onChange={handleChange} ref={saturRef}>
                                            <option className="opt">{props.satFatMaxFood}</option>
                                            <option className="opt">{props.satFatMediumFood}</option>
                                            <option className="opt">{props.satFatMinFood}</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="sugar" className="label-select">{props.label.label3}</label>
                                    <div className="col">

                                        <select className="form-control " id="sugar" onChange={handleChange} ref={sugarRef}>
                                            <option className="opt">{props.maxSugar}</option>
                                            <option className="opt">{props.mediumSugar}</option>
                                            <option className="opt">{props.minSugar}</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="salt" className="label-select">{props.label.label4}</label>
                                    <div className="col">
                                        <select className="form-control" id="salt" onChange={handleChange} ref={saltyRef}>
                                            <option className="opt">{props.maxSalt}</option>
                                            <option className="opt">{props.mediumSalt}</option>
                                            <option className="opt">{props.minSalt}</option>
                                        </select>
                                    </div>
                                </div>
                                <button type="submit"
                                    className="btn btn-primary submit"
                                    onClick={handleSubmit}>ENVIAR
                                </button>
                            </form>

                            <Modal show={activate} onClose={toggle}
                                commonString={stroutp}
                                commonStringBeverage={stringDrinkOutput}
                                validationOfFatSolids={fOutp}
                                validationOfSaturSolids={satfOutp}
                                validationOfSugarSolids={sugOutp}
                                validationOfSaltSolids={salOutp}
                                foodForm={formIsFood}
                                drinkForm={formIsDrink}
                            >
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Form;