import prisma from '@/lib/prisma';

const Home = async () => {
  const accounts = await prisma.account.findMany();

  return (
    <main>
      <h1>Home</h1>

      <ul>
        {accounts.map((account) => {
          return <li key={account.id}>{account.name}</li>;
        })}
      </ul>
    </main>
  );
};

export default Home;
