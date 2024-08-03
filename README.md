## Check it out live on Vercel
This project is live on vercel: https://propertyapp.vercel.app/

## Pulling It Down
If you'd like to pull it down to run it locally please contact me as you will need the local environment variables/files.

## What It Is
Rocky Mountain Retreats is an app in the same ecosystem as Airbnb.

## What You Can Do With It
You can list properties you would like to rent out (Create Rental in the menu).

View all the properties you have listed (My Rentals) as well as how many days they're booked for, the nightly rate you have set for them, and the total income they've brought in.

You can view the bookings you have made as a user rather than renter (Bookings).

You can view all the reservations you have upcoming, for how many nights, and the total cost (Reservations).

You can favorite a property by clicking on the Heart icon and view your Favorites in their own page (Favorites).

If you click into a property, you can make a reserveration by choosing your start and end date in the calendar.

You can complete a reservation using Stripe (You can use a test card number for checkout card number: 4242424242424242 /	CSV: any 3 digits /	Expiry date: Any future date).

You can see where the property is located on the map.

You can leave a review, including a star rating and a comment, as long as the property is not your own listing.

You can click on the orange Mountain Icon on the home page to take you back to the home page at any time, or to reset any serach parameters. 

You can use the category icons to sort the properties available. 

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Testing Payment

test card numbers for checkout : https://docs.stripe.com/testing
Visa	4242424242424242	Any 3 digits	Any future date
