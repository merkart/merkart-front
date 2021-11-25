import SearchBar from "./SearchBar";
import {NavBar} from "../nav-bar/NavBar";
import {useParams} from "react-router-dom";
export const SearchPage = (props) => {
    const find="";

    const params = useParams();
    console.log(params)
   /* if(props){
        const {search} = props.location.state;
        this.find= search;
    }*/


    return (

        <div>
            <NavBar/>
            
            <div className="content-app">
            <SearchBar search={params.find}/>


            </div>



        </div>


    );
}