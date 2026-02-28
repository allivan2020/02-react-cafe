import type { VoteType } from '../../types/votes';
import css from './VoteOptions.module.css';

interface VoteOptionsProps {
  onVote: (type: VoteType) => void;
  onReset: () => void;
  canReset: boolean;
}

export const VoteOptions = ({
  onVote,
  onReset,
  canReset,
}: VoteOptionsProps) => {
  return (
    <div className={css.container}>
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

      {canReset && (
        <button className={`${css.button} ${css.reset}`} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
};
