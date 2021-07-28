import EventItem from '@/components/eventItem';
import Layout from '@/components/Layout';
import {API_URL} from '@/config/index';
import Link from 'next/link';
export default function Home({events}) {
  return (
    <Layout>
      <h1>Upcomming Events</h1>
      {events.length === 0 && <h3>No Events Availiable!!</h3>}
      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}
      {events.length > 0 && (
        <Link href='/events'>
          <a className='btn-secondary'>All Events</a>
        </Link>
      )}
    </Layout>
  );
}

// export const getServerSideProps = async () => {}; //arrow func export

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();
  return {
    props: {events: events.slice(0, 2)},
    revalidate: 1,
  };
}
