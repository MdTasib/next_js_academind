import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A first meetup',
        address: 'Fatickchari, Chittagong',
        description: 'This is a first meetup',
        image: 'https://cdn.pixabay.com/photo/2021/07/01/20/01/scooter-6380217__340.jpg'
    },
    {
        id: 'm2',
        title: 'A second meetup',
        address: 'Fatickchari, Chittagong, Bangladesh',
        description: 'This is a second meetup',
        image: 'https://cdn.pixabay.com/photo/2019/07/21/07/12/new-york-4352072__340.jpg'
    },
]

function HomePage(props) {
    return <MeetupList meetups={props.meetups} />
}

// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;

//     // fetch data from an API
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS,
//         }
//     }
// }

export async function getStaticProps() {
    // fetch data from an API
    return {
        props: {
            meetups: DUMMY_MEETUPS
        },
        revalidate: 1
    }
}

export default HomePage;