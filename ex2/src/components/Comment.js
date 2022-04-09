import WithFetching from "./withFetching";
import Witherror from './Witherror'

const Comment = ({data}) => {
  return (
    <div>
      <h4>Comment</h4>
        <div>
          <p className="comment">{data.body}</p>
          <div>
            <span className="by">Commented By:</span>
            <span className="name">{data.name}</span>
          </div>
        </div>
    </div>
  );
};
export default WithFetching(Witherror(Comment));


