import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

const getStripe = () => {
  if(!stripePromise) {

    ////this publishaple key from stripe account ---- i takes from JSMASTERY
    stripePromise = loadStripe("pk_test_51Hqmw9EnylLNWUqj3gbIK3wHZBXqH0HegicIlGA0etfwS9a5JpESWoFucZHdnWMp0q6xq6thYSZghQUSpLkE46wJ00HrkNMsOV");
  }

  return stripePromise;
}

export default getStripe;