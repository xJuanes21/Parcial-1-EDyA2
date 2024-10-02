import Boton from "./Boton";
import { useState } from "react";
import Screen from "./Screen";
import { evaluate } from "mathjs";
import ButtonClear from "./ButtonClear";

const CalculatorDesign = () => {
    const [input, setInput] = useState('');

    const agregarInput = val => {
        setInput(input + val);
    };

    const calcularResultado = () => {
        if (input) {
            setInput(evaluate(input));
        } else {
            alert("Por favor ingrese valores para realizar los cálculos.");
        }
    };

    return (
        <div className="h-screen pt-[10px] bg-[#1b1b32] font-sans flex flex-wrap justify-center items-center">
            <div className="w-full h-[50px] m-[8px] flex items-center justify-center">
                <h1 className="text-white text-[30px] font-bold underline">Juan Esteban Salazar - 2221681</h1>
            </div>
            <div className="w-[400px] h-[600px] p-[14px] bg-[#99c9ff] rounded-[20px] border-5 border-white">
                <Screen input={input} />
                <div className="m-[4px] flex items-center justify-center">
                    <Boton manejarClic={agregarInput}>1</Boton>
                    <Boton manejarClic={agregarInput}>2</Boton>
                    <Boton manejarClic={agregarInput}>3</Boton>
                    <Boton manejarClic={agregarInput}>+</Boton>
                </div>
                <div className="m-[4px] flex items-center justify-center">
                    <Boton manejarClic={agregarInput}>4</Boton>
                    <Boton manejarClic={agregarInput}>5</Boton>
                    <Boton manejarClic={agregarInput}>6</Boton>
                    <Boton manejarClic={agregarInput}>-</Boton>
                </div>
                <div className="m-[4px] flex items-center justify-center">
                    <Boton manejarClic={agregarInput}>7</Boton>
                    <Boton manejarClic={agregarInput}>8</Boton>
                    <Boton manejarClic={agregarInput}>9</Boton>
                    <Boton manejarClic={agregarInput}>*</Boton>
                </div>
                <div className="m-[4px] flex items-center justify-center">
                    <Boton manejarClic={calcularResultado}>=</Boton>
                    <Boton manejarClic={agregarInput}>0</Boton>
                    <Boton manejarClic={agregarInput}>.</Boton>
                    <Boton manejarClic={agregarInput}>/</Boton>
                </div>
                <div className="m-[4px] flex items-center justify-center">
                    <ButtonClear manejarClear={() => setInput('')}>Reset</ButtonClear>
                </div>
            </div>
        </div>
    );
};

export default CalculatorDesign;
