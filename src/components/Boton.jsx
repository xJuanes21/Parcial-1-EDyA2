function Boton(props) {

    const esOperador = valor => {
      return isNaN(valor) && (valor !== '.') && (valor !== '=');
    };
  
    return (
      <div
        className={
          `h-[83px] flex flex-grow justify-center items-center font-bold text-[38px] 
          ${esOperador(props.children) ? 'bg-[#00471b] hover:bg-[#ff6600]' : 'bg-[#1b1b32] hover:bg-[#5a01a7]'} 
          text-white rounded-[25px] border-2 border-white m-[4px] cursor-pointer select-none`
        }
        onClick={() => props.manejarClic(props.children)}>
        {props.children}
      </div>
    );
  }
  
  export default Boton;
  