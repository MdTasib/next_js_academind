/* eslint-disable @next/next/no-img-element */
import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
import { useRouter } from 'next/dist/client/router';

function MeetupItem({ id, image, title, address }) {
  const router = useRouter();
  function showDetailsHandler() {
    router.push(`/${id}`)
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
