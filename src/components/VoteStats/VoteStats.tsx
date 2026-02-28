import type { Votes } from 'types/votes';
import css from './VoteStats.module.css';

interface VoteStatsProps {
  stats: Votes;
  total: number;
  rate: number;
}

export const VoteStats = ({ stats, total, rate }: VoteStatsProps) => {
  return (
    <div className={css.statsContainer}>
      <p className={css.stat}>
        Good: <strong>{stats.good}</strong>
      </p>
      <p className={css.stat}>
        Neutral: <strong>{stats.neutral}</strong>
      </p>
      <p className={css.stat}>
        Bad: <strong>{stats.bad}</strong>
      </p>
      <p className={css.stat}>
        Total: <strong>{total}</strong>
      </p>
      <p className={css.stat}>
        Positive: <strong>{rate}%</strong>
      </p>
    </div>
  );
};
