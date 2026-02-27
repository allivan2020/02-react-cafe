import type { Votes } from '../../types/votes';
import styles from './VoteStats.module.css';

interface VoteStatsProps {
  stats: Votes;
  total: number;
  rate: number;
}

export const VoteStats = ({ stats, total, rate }: VoteStatsProps) => {
  return (
    <div className={styles.container}>
      <p className={styles.stat}>
        Good: <strong>{stats.good}</strong>
      </p>
      <p className={styles.stat}>
        Neutral: <strong>{stats.neutral}</strong>
      </p>
      <p className={styles.stat}>
        Bad: <strong>{stats.bad}</strong>
      </p>
      <p className={styles.stat}>
        Total: <strong>{total}</strong>
      </p>
      <p className={styles.stat}>
        Positive: <strong>{rate}%</strong>
      </p>
    </div>
  );
};
