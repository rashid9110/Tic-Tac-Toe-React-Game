import Icon from "../Icon/Icon";
import './Card.css'
console.log(Icon);

function Card({gameEnd,player,onPlay,index}){
        let iconElement  = <Icon/>
        if(player==="x"){
            iconElement  = <Icon name="cross"/>
        }else if(player==="o"){
            iconElement  = <Icon name="circle"/>
        }
return(
    <div className="card" onClick={()=> !gameEnd && player== "" && onPlay(index)}>
       {iconElement }
    </div>
)
}

export default Card;