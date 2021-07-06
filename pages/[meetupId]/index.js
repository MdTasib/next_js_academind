import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
    return <Fragment>
        <MeetupDetail
            image='https://cdn.pixabay.com/photo/2021/07/01/20/01/scooter-6380217__340.jpg'
            title='A first meetup'
            address='Fatickchari'
            description='The meetup description'
        />
    </Fragment>
}

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            {
                params: {
                    meetupId: 'm1'
                }
            },
            {
                params: {
                    meetupId: 'm2'
                }
            },
        ]
    }
}

export async function getStaticProps(context) {
    // fatch data for a single meetup

    const meetupId = context.params.meetupId;
    console.log(meetupId);

    return {
        props: {
            meetupData: {
                id: 'm1',
                image: 'https://cdn.pixabay.com/photo/2021/07/01/20/01/scooter-6380217__340.jpg',
                title: 'A first meetup',
                address: 'Fatickchari',
                description: 'The meetup description'
            }
        }
    }
}

export default MeetupDetails;