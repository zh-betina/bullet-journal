import CuppaTea from "../components/icons/cuppaTea";
import Lemonade from "../components/icons/lemonade";
import PaperClip from "../components/icons/paperClip";
import ToDo from "../components/icons/toDo";

import tools from "./sidebar.module.css";

export default function Sidebar(){
    return(
        <sidebar className={tools.sidebar}>
            <CuppaTea/>
            <Lemonade/>
            <PaperClip/>
            <ToDo/>
        </sidebar>
    )
}