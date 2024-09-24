import { useState } from "react";
import Card from "../Card/Card";
import isWinner from '../../helpers/checkWinner';
import "./Grid.css"


function Grid({numberOfCards}){

   const [board,setBorder]=useState(Array(numberOfCards).fill(""));
   const [turn,setTurn]=useState(true);//true=>o , false=>x
   const [winner, setWinner]=useState(null);
   function play(index){
        if(turn==true){
           board[index]="o";
        }else{
           board[index]="x";
        }
          const win=isWinner(board,turn ? "o" :"x");
        if(win){

           setWinner(win);
        }
        setBorder([...board]);
        setTurn(!turn)
   }
   function reset(){
     setTurn(true);
     setWinner(null);
     setBorder(Array(numberOfCards).fill(""))
   }
   return (
    <div className="grid-wrapper">
        {
            winner &&(
                <>
                <h1 className="trun-highlit">Winner is {winner}</h1>
                <button className="reset" onClick={reset}>Reset game</button>
                </>
            )
        }
        <h1 className="trun-highlit">Current turn :{(turn) ? 'o':'x'}</h1>
        <div className="container">
            <div className="content">
               <div className="grid">
                  {board.map((el,idx)=> <Card gameEnd={winner ?true :false} key={idx} onPlay={play} player={el}  index={idx}/>)}
               </div>
          </div>
        </div>
    </div>
   );
}

        

export default Grid;