import React, { useState, useEffect } from 'react';

const randomQuote = [
    { id: 1, quote: 'Innovation distinguishes between a leader and a follower.', name: 'Steve Jobs' },
    { id: 2, quote: 'The only way to do great work is to love what you do.', name: 'Steve Jobs' },
    { id: 3, quote: 'Success is not final, failure is not fatal: It is the courage to continue that counts.', name: 'Winston Churchill' },
    { id: 4, quote: 'The future of technology is about making the complex simple.', name: 'Mark Zuckerberg' },
    { id: 5, quote: 'Technology is best when it brings people together.', name: 'Matt Mullenweg' },
    { id: 6, quote: 'Don’t be afraid to give up the good to go for the great.', name: 'John D. Rockefeller' },
    { id: 7, quote: 'Success is the sum of small efforts, repeated day in and day out.', name: 'Robert Collier' },
    { id: 8, quote: 'The best way to predict the future is to invent it.', name: 'Alan Kay' },
    { id: 9, quote: 'In the middle of difficulty lies opportunity.', name: 'Albert Einstein' },
    { id: 10, quote: 'Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.', name: 'Steve Jobs' },
    { id: 11, quote: 'It’s not about ideas. It’s about making ideas happen.', name: 'Scott Belsky' },
    { id: 12, quote: 'Success is not the key to happiness. Happiness is the key to success.', name: 'Albert Schweitzer' },
    { id: 13, quote: 'If you want to go fast, go alone. If you want to go far, go together.', name: 'African Proverb' },
    { id: 14, quote: 'The only limit to our realization of tomorrow is our doubts of today.', name: 'Franklin D. Roosevelt' },
    { id: 15, quote: 'Don’t watch the clock; do what it does. Keep going.', name: 'Sam Levenson' },
    { id: 16, quote: 'The harder you work for something, the greater you’ll feel when you achieve it.', name: 'Anonymous' },
    { id: 17, quote: 'Simplicity is the ultimate sophistication.', name: 'Leonardo da Vinci' },
    { id: 18, quote: 'It’s not about having the right opportunities. It’s about handling the opportunities right.', name: 'Mark Cuban' },
    { id: 19, quote: 'The only way to achieve the impossible is to believe it is possible.', name: 'Charles Kingsleigh' },
    { id: 20, quote: 'Success is not in what you have, but who you are.', name: 'Bo Bennett' },
    { id: 21, quote: 'When something is important enough, you do it even if the odds are not in your favor.', name: 'Elon Musk' },
    { id: 22, quote: 'Failure is an option here. If things are not failing, you are not innovating enough.', name: 'Elon Musk' },
    { id: 23, quote: 'The first step is to establish that something is possible; then probability will occur.', name: 'Elon Musk' },
    { id: 24, quote: 'I think it is possible for ordinary people to choose to be extraordinary.', name: 'Elon Musk' },
    { id: 25, quote: 'You get paid in direct proportion to the difficulty of problems you solve.', name: 'Elon Musk' },
    { id: 26, quote: 'Persistence is very important. You should not give up unless you are forced to give up.', name: 'Elon Musk' },
    { id: 27, quote: 'Some people don’t like change, but you need to embrace change if the alternative is disaster.', name: 'Elon Musk' },
    { id: 28, quote: 'I could either watch it happen or be a part of it.', name: 'Elon Musk' },
    { id: 29, quote: 'The key to making things affordable is design and technology improvements.', name: 'Elon Musk' },
    { id: 30, quote: 'Great companies are built on great products.', name: 'Elon Musk' },
    { id: 31, quote: 'The best way to predict the future is to create it.', name: 'Abraham Lincoln' },
    { id: 32, quote: 'Great things are not done by impulse, but by a series of small things brought together.', name: 'Vincent Van Gogh' },
    { id: 33, quote: 'If you don’t build your dream, someone else will hire you to help them build theirs.', name: 'Tony Gaskins' },
    { id: 34, quote: 'Entrepreneurship is neither a science nor an art. It is a practice.', name: 'Peter Drucker' },
    { id: 35, quote: 'The only way to do great work is to love what you do.', name: 'Steve Jobs' },
    { id: 36, quote: 'Every day that we spent not improving our products was a wasted day.', name: 'Tony Hsieh' },
    { id: 37, quote: 'Life is not about finding yourself. Life is about creating yourself.', name: 'George Bernard Shaw' },
    { id: 38, quote: 'Don’t let the noise of others’ opinions drown out your own inner voice.', name: 'Steve Jobs' },
    { id: 39, quote: 'Don’t be afraid to give up the good to go for the great.', name: 'John D. Rockefeller' },
    { id: 40, quote: 'To succeed in life, you need two things: ignorance and confidence.', name: 'Mark Twain' },
    { id: 41, quote: 'Your most unhappy customers are your greatest source of learning.', name: 'Bill Gates' },
    { id: 42, quote: 'Quality is more important than quantity. One home run is much better than two doubles.', name: 'Steve Jobs' },
    { id: 43, quote: 'There is no elevator to success. You have to take the stairs.', name: 'Zig Ziglar' },
    { id: 44, quote: 'The road to success is always under construction.', name: 'Lily Tomlin' },
    { id: 45, quote: 'Start where you are. Use what you have. Do what you can.', name: 'Arthur Ashe' },
    { id: 46, quote: 'It’s not about ideas. It’s about making ideas happen.', name: 'Scott Belsky' },
    { id: 47, quote: 'I believe that if you keep your faith, you keep your trust, you keep the right attitude, if you’re grateful, you’ll see God open up new doors.', name: 'Joel Osteen' },
    { id: 48, quote: 'I never dreamed about success. I worked for it.', name: 'Estée Lauder' },
    { id: 49, quote: 'You miss 100% of the shots you don’t take.', name: 'Wayne Gretzky' },
    { id: 50, quote: 'Nothing will work unless you do.', name: 'Maya Angelou' },
    { id: 51, quote: 'What you do today can improve all your tomorrows.', name: 'Ralph Marston' },
    { id: 52, quote: 'I find that the harder I work, the more luck I seem to have.', name: 'Thomas Jefferson' },
    { id: 53, quote: 'The best revenge is massive success.', name: 'Frank Sinatra' },
    { id: 54, quote: 'Success is not the key to happiness. Happiness is the key to success.', name: 'Albert Schweitzer' },
    { id: 55, quote: 'The difference between winning and losing is most often not quitting.', name: 'Walt Disney' },
    { id: 56, quote: 'Opportunities don’t happen. You create them.', name: 'Chris Grosser' },
    { id: 57, quote: 'Innovation is the ability to see change as an opportunity – not a threat.', name: 'Steve Jobs' },
    { id: 58, quote: 'Dream big. Start small. Act now.', name: 'Robin Sharma' },
    { id: 59, quote: 'Do one thing every day that scares you.', name: 'Eleanor Roosevelt' },
    { id: 60, quote: 'Success usually comes to those who are too busy to be looking for it.', name: 'Henry David Thoreau' },
    { id: 61, quote: 'If you want to lift yourself up, lift up someone else.', name: 'Booker T. Washington' },
    { id: 62, quote: 'Innovation distinguishes between a leader and a follower.', name: 'Steve Jobs' },
    { id: 63, quote: 'There’s no shortage of remarkable ideas, what’s missing is the will to execute them.', name: 'Seth Godin' },
    { id: 64, quote: 'The secret to getting ahead is getting started.', name: 'Mark Twain' },
    { id: 65, quote: 'Be yourself; everyone else is already taken.', name: 'Oscar Wilde' },
    { id: 66, quote: 'I’m convinced that about half of what separates the successful entrepreneurs from the non-successful ones is pure perseverance.', name: 'Steve Jobs' },
    { id: 67, quote: 'The question isn’t who is going to let me; it’s who is going to stop me.', name: 'Ayn Rand' },
    { id: 68, quote: 'Success is the sum of small efforts, repeated day in and day out.', name: 'Robert Collier' },
    { id: 69, quote: 'Time is the scarcest resource, and unless it is managed nothing else can be managed.', name: 'Peter Drucker' },
    { id: 70, quote: 'We cannot solve our problems with the same thinking we used when we created them.', name: 'Albert Einstein' },
    { id: 71, quote: 'The way to get started is to quit talking and begin doing.', name: 'Walt Disney' },
    { id: 72, quote: 'A year from now you may wish you had started today.', name: 'Karen Lamb' },
    { id: 73, quote: 'We do not remember days, we remember moments.', name: 'Cesare Pavese' },
    { id: 74, quote: 'Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.', name: 'Steve Jobs' },
    { id: 75, quote: 'The best way to predict your future is to create it.', name: 'Abraham Lincoln' },
    { id: 76, quote: 'A goal without a plan is just a wish.', name: 'Antoine de Saint-Exupéry' },
    { id: 77, quote: 'A person who never made a mistake never tried anything new.', name: 'Albert Einstein' },
    { id: 78, quote: 'You can’t connect the dots looking forward; you can only connect them looking backwards.', name: 'Steve Jobs' },
    { id: 79, quote: 'It’s not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.', name: 'Charles Darwin' },
    { id: 80, quote: 'When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.', name: 'Henry Ford' },
    { id: 81, quote: 'There is only one way to avoid criticism: Do nothing, say nothing, and be nothing.', name: 'Aristotle' },
    { id: 82, quote: 'Life is 10% what happens to us and 90% how we react to it.', name: 'Charles R. Swindoll' },
    { id: 83, quote: 'Risk more than others think is safe. Dream more than others think is practical.', name: 'Howard Schultz' },
    { id: 84, quote: 'The journey of a thousand miles begins with one step.', name: 'Lao Tzu' },
    { id: 85, quote: 'Nothing is impossible, the word itself says "I’m possible!"', name: 'Audrey Hepburn' },
    { id: 86, quote: 'If you can dream it, you can do it.', name: 'Walt Disney' },
    { id: 87, quote: 'Success does not consist in never making mistakes but in never making the same one a second time.', name: 'George Bernard Shaw' },
    { id: 88, quote: 'What lies behind us and what lies before us are tiny matters compared to what lies within us.', name: 'Ralph Waldo Emerson' },
    { id: 89, quote: 'Innovation is the outcome of a habit, not a random act.', name: 'Seth Godin' },
    { id: 90, quote: 'Success is walking from failure to failure with no loss of enthusiasm.', name: 'Winston Churchill' },
    { id: 91, quote: 'People don’t buy what you do, they buy why you do it.', name: 'Simon Sinek' },
    { id: 92, quote: 'Innovation requires the courage to let go of certainties.', name: 'Munir K. K. Bhamji' },
    { id: 93, quote: 'The future belongs to those who believe in the beauty of their dreams.', name: 'Eleanor Roosevelt' },
    { id: 94, quote: 'A successful man is one who can lay a firm foundation with the bricks others have thrown at him.', name: 'David Brinkley' },
    { id: 95, quote: 'The only way to achieve the impossible is to believe it is possible.', name: 'Charles Kingsleigh' },
    { id: 96, quote: 'The harder you work for something, the greater you’ll feel when you achieve it.', name: 'Anonymous' },
    { id: 97, quote: 'Innovation is creating something new that makes things better, easier, and more efficient.', name: 'Larry Page' },
    { id: 98, quote: 'If you don’t fail at least 90 percent of the time, you’re not taking enough risks.', name: 'Woody Allen' },
    { id: 99, quote: 'Perseverance is not a long race; it is many short races one after the other.', name: 'Walter Elliot' },
    { id: 100, quote: 'The secret of getting ahead is getting started.', name: 'Mark Twain' }
  ];
const Quotes = () => {
  const [randomIndex, setRandomIndex] = useState(null);

  useEffect(() => {
    const index = Math.floor(Math.random() * randomQuote.length);
    setRandomIndex(index);
  }, []); 

  if (randomIndex === null) return <div>Loading...</div>;

  return (
    <div className="text-center mt-10 mb-10">
      <p className="italic text-2xl text-gray-700 dark:text-yellow-100">
        "{randomQuote[randomIndex].quote}"
      </p>
      <p className="text-lg text-gray-500 dark:text-yellow-100 mt-4">
        - {randomQuote[randomIndex].name}
      </p>
    </div>
  );
}

export default Quotes;