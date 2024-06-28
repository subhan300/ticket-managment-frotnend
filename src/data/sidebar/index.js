import PhotoFilterOutlinedIcon from '@mui/icons-material/PhotoFilterOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import { MANAGER, TECHNICIAN } from '../../helper/constants';
export const managerSideBar=()=>{
    return [{icon:AppsOutlinedIcon ,title:"Home",path:"/"},{icon:PhotoFilterOutlinedIcon ,title:"Tickets",path:`/${MANAGER.toLowerCase()}/tickets`},{icon:AppsOutlinedIcon ,title:"Users",path:`/${MANAGER.toLowerCase()}/users`}]
}

export const TechnicianSideBar=()=>{
    return [{icon:"",title:"Home",path:'/'},{icon:"",title:"Tickets",path:`/${TECHNICIAN.toLowerCase()}/tickets`},]
}

export const adminSideBar=()=>{
    return [{icon:AppsOutlinedIcon ,title:"Home"},{icon:PhotoFilterOutlinedIcon ,title:"Home"},{icon:AppsOutlinedIcon ,title:"Home"}]
}

export const userSideBar=()=>{
    return [{icon:"",title:"Home"},{icon:"",title:"Home"},{icon:"",title:"Home"}]
}