import { ComponentCard } from "./Card-works";
export default function Main(){
    return <div className="center-col" >
        <h1>Plans</h1>
        <p>View your plan information or switch plans according to your needs.</p>
        <div className="cards">
        <ComponentCard/>
        <ComponentCard/>

        </div>
        
        <br />

        

    </div>;
    
}