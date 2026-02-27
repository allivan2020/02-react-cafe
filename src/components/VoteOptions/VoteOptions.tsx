import type { VoteType } from '../../types/votes';
interface VoteOptionsProps {
  onVote: (type: VoteType) => void;
  onReset: () => void;
}
export const VoteOptions = ({ onVote, onReset }: VoteOptionsProps) => {
  return (
    <div>
      <button onClick={() => onVote('good')}>Good</button>
      <button onClick={() => onVote('neutral')}>Neutral</button>
      <button onClick={() => onVote('bad')}>Bad</button>

      <button onClick={onReset}>Reset</button>
    </div>
  );
};
