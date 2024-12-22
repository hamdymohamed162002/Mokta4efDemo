
import classes from "./Messsages.module.scss";
import Profile from "./../../../assets/MessageProfile.png";
const NotMyMessage = ({
    text,Time
}) => {
  return (
    <div>
      <div className={classes.MyMessageProfile}>
        <img src={Profile} />
        <span>عبدالله محمد</span>
      </div>
      <div className={classes.NotMyMessageBody}>
{
    text
}
<div className="d-flex justify-content-end">
    {Time}
</div>
      </div>
    </div>
  );
};

export default NotMyMessage;
