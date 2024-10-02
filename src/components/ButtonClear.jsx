const ButtonClear = (props) => (
    <div 
    className=" h-[83px]  flex   flex-grow  justify-center items-center  font-bold text-[38px] 
    bg-[#1b1b32]  text-white rounded-[25px] border-2  border-white  m-[4px] cursor-pointer select-none hover:bg-[#5a01a7]" 
    onClick={props.manejarClear}
  >      {props.children}
    </div>
  );
  
  export default ButtonClear;