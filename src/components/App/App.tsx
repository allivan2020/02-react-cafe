import { useState } from 'react';
import type { Votes, VoteType } from 'types/votes';
import css from './App.module.css';
import CafeInfo from 'components/Cafeinfo/CafeInfo';
import { VoteOptions } from 'components/VoteOptions/VoteOptions';
import { VoteStats } from 'components/VoteStats/VoteStats';

function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleVote = (type: VoteType) => {
    setVotes((prevVotes) => {
      return {
        ...prevVotes,
        [type]: prevVotes[type] + 1,
      };
    });
  };

  const resetVotes = () => {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalVotes = votes.good + votes.bad + votes.neutral;

  const positiveRate =
    totalVotes > 0 ? Math.round((votes.good / totalVotes) * 100) : 0;

  const Notification = <p className={css.message}>No feedback yet</p>;

  return (
    <>
      <div className={css.app}>
        <CafeInfo />

        <VoteOptions
          onVote={handleVote}
          onReset={resetVotes}
          showReset={totalVotes > 0}
        />

        {totalVotes > 0 ? (
          <VoteStats stats={votes} total={totalVotes} rate={positiveRate} />
        ) : (
          Notification
        )}
      </div>
    </>
  );
}
export default App;
