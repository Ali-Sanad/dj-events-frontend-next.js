import Layout from '@/components/Layout';
import {API_URL} from '@/config/index';
import classes from '@/styles/Event.module.css';
import Image from 'next/image';
import Link from 'next/link';
import {FaPencilAlt, FaTimes} from 'react-icons/fa';
const EventPage = ({evt}) => {
  const deleteEvent = () => {
    console.log('delete');
  };
  return (
    <Layout>
      <div className={classes.event}>
        <div className={classes.controls}>
          <Link href={`/events/edit/${evt.id}`}>
            <a>
              <FaPencilAlt /> Edit Event
            </a>
          </Link>
          <a href='#' className={classes.delete} onClick={() => deleteEvent()}>
            <FaTimes /> Delete Event
          </a>
        </div>
        <span>
          {evt.date} at {evt.time}
        </span>
        <h1>{evt.name}</h1>
        {evt.image && (
          <div className={classes.image}>
            <Image src={evt.image} width={960} height={600} alt='' />
          </div>
        )}
        <h3>Performers:</h3>
        <p>{evt.performers}</p>
        <h3>Description:</h3>
        <p>{evt.description}</p>
        <h3>Venue: {evt.venue}</h3>
        <p>{evt.address}</p>

        <Link href='/events'>
          <a className={classes.back}>{'<'} Go Back</a>
        </Link>
      </div>
    </Layout>
  );
};

//getStaticPaths => called at build time whenever dynamic routing exists
export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();
  const paths = events.map((evt) => ({params: {slug: evt.slug}}));

  return {
    paths,
    fallback: true,
  };
}
//getStaticProps => called at build time once
export async function getStaticProps({params: {slug}}) {
  const res = await fetch(`${API_URL}/api/events/${slug}`);
  const event = await res.json();
  return {
    props: {evt: event[0]},
  };
}

//getServerSideProps =>called every request
// export async function getServerSideProps({query: {slug}}) {
//   const res = await fetch(`${API_URL}/api/events/${slug}`);
//   const event = await res.json();
//   console.log(event);
//   return {
//     props: {evt: event[0]},
//   };
// }

export default EventPage;
