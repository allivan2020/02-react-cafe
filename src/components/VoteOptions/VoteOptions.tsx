import type { VoteType } from 'types/votes';
import css from './VoteOptions.module.css';
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
    <div className={css.buttonContainer}>
      <button
        className={`${css.button} ${css.good}`}
        onClick={() => onVote('good')}
      >
        Good
      </button>
      <button
        className={`${css.button} ${css.neutral}`}
        onClick={() => onVote('neutral')}
      >
        Neutral
      </button>
      <button
        className={`${css.button} ${css.bad}`}
        onClick={() => onVote('bad')}
      >
        Bad
      </button>

      {showReset && (
        <button className={`${css.button} ${css.reset}`} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
};
