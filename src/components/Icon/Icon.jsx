import { FaPen, FaRegCircle, FaTimes } from 'react-icons/fa';

function Card({ name }) {
       if(name=="circle"){
        return <FaRegCircle/>
       }else if(name=="cross"){
        return <FaTimes/>
       }else{
        return <FaPen/>
       }
  
}

export default Card;
