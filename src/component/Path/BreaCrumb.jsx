import { Link } from 'react-router-dom';
import classes from './BreaCrumb.module.scss'
import DashboardIcon from '../icons/sidebarIcons/dashboardIcon';
const BreaCrumb = ({paths}) => {
    return ( 
        <div className={classes.BreadCrumbContainer}>


    <DashboardIcon  active width={"24px"} color={"#96979A"} />
    {
        paths.map((path,index)=>{
            return(
                <div className={`${classes.BreadCrumbPath} ${path.Active && classes.Active}`}>
                    <Link to={path.path}>{path.name}</Link>
                {
                    index != paths.length -1 && <span>/</span>
                }
                </div>
            )
        })
    }

        </div>
     );
}
 
export default BreaCrumb;