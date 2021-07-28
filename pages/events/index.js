import EventItem from '@/components/eventItem';
import Layout from '@/components/Layout';
import {API_URL} from '@/config/index';
export default function EventPage({events}) {
  return (
    <Layout>
      <h1> Events</h1>
      {events.length === 0 && <h3>No Events Availiable!!</h3>}
      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}
    </Layout>
  );
}

// export const getServerSideProps = async () => {}; //arrow func export

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();
  return {
    props: {events},
    revalidate: 1,
  };
}
