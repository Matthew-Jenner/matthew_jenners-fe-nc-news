import { useState } from "react"
import { patchReviewVotes } from "../api";

function VotingButton({singleArticle}) {
    const [userVote, setUserVote] = useState(0);
    const [isVotingErr, setIsVotingErr] = useState(false);

const onClick = () => {
    
    setIsVotingErr(false);
    setUserVote(1);
    patchReviewVotes(singleArticle.article_id, 1).catch(() => {
      setUserVote(0);
      setIsVotingErr(true);
    });
  };
    return (
    <div>
        <button onClick={onClick} disabled={userVote !== 0}>         
         <span className="likes-counter">{`Like 👍 `}</span>
        </button>
        <p className="article-votes">Votes: {singleArticle.votes + userVote}</p>
        {isVotingErr && <p>vote did not work!</p>}
    </div>)

}
export default VotingButton