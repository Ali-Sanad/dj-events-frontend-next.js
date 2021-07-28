import Layout from '@/components/Layout';
import {API_URL} from '@/config/index';
const EventPage = ({evt}) => {
  return (
    <Layout>
      <h1>{evt.name}</h1>
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
