import Link from 'next/link';
import Image from 'next/image';
import classes from '@/styles/EventItem.module.css';
const EventItem = ({evt}) => {
  return (
    <div className={classes.event}>
      <div className={classes.img}>
        <Image
          src={evt.image ? evt.image : '/images/event-default.png'}
          width={180}
          height={100}
          alt=''
        />
      </div>
      <div className={classes.info}>
        <span>
          {evt.date} at {evt.time}
        </span>
        <h3>{evt.name}</h3>
      </div>

      <div>
        <Link href={`/events/${evt.slug}`}>
          <a className='btn'>Details</a>
        </Link>
      </div>
    </div>
  );
};

export default EventItem;
