import type { VoteType } from '../../types/votes';
interface VoteOptionsProps {
  onVote: (type: VoteType) => void;
  onReset: () => void;
  showReset: boolean;
}
export const VoteOptions = ({
  onVote,
  onReset,
  showReset,
}: VoteOptionsProps) => {
  return (
    <div>
      <button onClick={() => onVote('good')}>Good</button>
      <button onClick={() => onVote('neutral')}>Neutral</button>
      <button onClick={() => onVote('bad')}>Bad</button>

      {showReset && <button onClick={onReset}>Reset</button>}
    </div>
  );
};
