import ALoader from "react-loader-spinner";

import s from "./Loader.module.css"
const Loader =() =>{


    return (<div className={s.loader}>
            <ALoader 
            type="ThreeDots"
            color="#1b6e10"
            height={80}
            width={80}
        />
        </div>
        );
    }
export default Loader;