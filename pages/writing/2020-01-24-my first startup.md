# Dailivery - a same day delivery app
>  An cross platform app for deliveres and senders

{{date}}

We launched an app, named Dailivery: A customer-2-customer delivery app, that lets you send and receive items from parcels until up to couches. We were a software powered logistics/courier platform app. After half a year of operating, we were unable to find product-market fit.

### The Beginnings

In 2018, the idea came into my mind to build an app. An app, that lets you deliver anything you need by tapping just a few buttons on your phone. We noticed that the customer-2-customers market was not well maintained by existing solutions and the technology is outdated.

### The Idea

My co-founder and I sat together and thought, what would be needed to create such an app. We analyzed what existing solutions were around. We found out, that there are conventional couriers who still needed to be contacted by phone or email form, big companies who did not focus on private customers and van rentals, which were time-consuming and expensive.

What we did was contacting said existing couriers and made interviews with them to learn about their hardships and how they acquire customers.

We also asked random people and friends to give us feedback on the given solution and if they would use it. This was done via forms and with real-life interviews.

### The Plan

We knew we were on the right track with our idea and started mapping out the plan for the design-, development-, and MVP-roadmap.
- Safety: How to guarantee the safety of the items? → Do we need insurance?
Validation: Do we want to screen and background check the drivers?
Confirmation: What method can we use to establish a successful delivery?
- Payment: What payment systems make the most sense and whether we should use third parties?
Targeting: Should we start with C2C vs B2B?
Sizing: How do we communicate the size of the package for the drivers?
- Algorithms: What criterions would we use to define the information points?
- Pricing API: Which API to calculate our pricing?
- App: Single vs having two apps one for drivers and one for senders.

### Develop

After we made sure to answer our own questions, we started wire-framing and created mockups. After assessing the wireframes we started designing and the end result was a simple, beautiful and functional user interface:

![DailiveryUX] (dailivery-ux.webp)

During the design stages, we made sure that people around us, understood what the app can do. So, we started to conduct user tests with our clickable prototype and measured how people interacted. We also did A/B tests, by showing different users, different design touch-points. After we collected the feedback and filtered out the best solutions, we implemented the suggestions and iterated the design on a regular basis.
After the design was finished, a full-stack developer joined our team and we started to develop our MVP UI/UX. We decided to go with a very lean and fast framework technology.

We decided to develop with React Native to ensure cross-platform technology right from the start. We added Node.js as our back-end language.

### Features write-down and sprint planning

We’ve split the app into two one for the “Drivers” (being the ones who transport the items) and the “Sender” (being the users who want to send items.)

#### Driver — On-boarding

- Sign-up: Create an account by completing the fields by entering your e-mail, address and password, and phone number.
- Forgot password: This feature allows the Driver to retrieve his password by sending an instructional mail to the provided e-mail account.
- Upload picture: The Driver will have a place where he adds a picture to his profile. He will be able to upload an existing picture from his phone’s camera roll, or he can take a picture directly by activating the camera function.
- Region of activity: Drivers will be able to define in what city or region they operate in. This will help direct notification of the job in which their pick-up points are at those specific areas (city/district).
- Payment Details: Drivers will provide the details of a checking account where they will receive the payments of the jobs once they’re confirmed and completed.

#### Driver — Profile Settings

- Upload/change picture: Here the Driver can upload or change his profile picture — this is the picture the person sees when they are matched with the Driver.
- Change or update settings: Here the Driver can change any important information that he provided during the sign-up such as e-mail and password, checking account, name and phone number.
- Cash/jobs dashboard: In this section Drivers will be able to check how many jobs they have submitted and concluded and what amount of payouts have been made.

#### Driver — Accepting & Delivery

- Match-making algorithm: The matchmaking algorithm’s purpose is to match the most suitable Drivers with each job. The most suitable Drivers will be defined by their “city/region of activity” and their current location and the pick-up point of the job.
- Notification: Notifications in-app will alert the suitable Drivers of new jobs whenever they are submitted by senders, and the Driver matches the criterions as defined in the “match-making algorithm”.
- Card View: Different jobs that match your requirements are viewed in one place. The card view will include quick important information on distance, pick-up address, and value of each available job.
- Job Details: When you press on the jobs in the card view Drivers will open a more detailed view providing the relevant details to define whether or not you would like to accept it. This includes items or person, payout, pick-up and drop-off address, item size and distance and a link to third party map app which can demonstrate the suggested route.
- Accept/reject: Drivers will be able to choose if they want to accept or reject the offer. The first one to accept the offer will get the job. Once the job is accepted the contact of the person at pick-up and drop-off points will be provided.
- Confirmation: When the Driver delivers the article to the receiver at the drop-off point that person will provide him a four-digit confirmation code (To be discussed) that will signal the completion of the delivery. This confirmation code is automatically sent to the sender and receiver as soon as the driver accepts the job.
- Payment: Once the confirmation code is correctly inserted the payment amount (as defined in the job details) will be credited to the Drivers checking account, as he has provided in the payment details.

#### Sender — On-boarding

- Sign-up: Create an account by completing the fields to enter your e-mail address, password, and phone number.
- Forgot password: This feature allows senders to retrieve the password by sending an instructional e-mail to the provided e-mail account.
- Upload picture: The sender will have a place where he adds a picture to his profile. He will be able to upload an existing picture from his phone’s camera roll or take a picture directly by activating the camera function.
- Payment Details: Sender will provide their credit card details. These credit card details will be used to make payment through the platform to Drivers whenever a job is completed.

#### Sender — Profile Settings
- Upload/change picture: Here the sender can upload or change profile picture. This is the picture Driver sees when they are matched with the sender.
- Change or update settings: Here the sender can change any important information that he provided during the sign-up such as e-mail and password, checking account, name and phone number.
- Cash/jobs dashboard: In this section sender will be able to check how many jobs they have submitted and concluded and what amount of payouts have been made.

#### Sender — Create Job
- Pick-up/Drop-off Address: The sender will define what is the exact location for the pick-up and the drop-off of the item. This will include street name, unit number, zip code and city.
- Item Size: Sender will define what is the size of the item. There will be different types of packages with different sizes for senders to pick from (to be discussed).
- Contact-person: When defining the pick-up and drop off-point, the sender will be able to define if there is someone else at pick-up or drop-off (receiver). If that’s the case he will be prompted to include their contact information (to be discussed).

#### Sender — Accepting & Delivering
- Accepted: When the job is set the sender (and receiver) will be notified as soon as Driver has accepted edit. Additionally, the profile, including name and phone number and rating of the Driver will be made available.
- Cancelation: If the sender is not pleased with whom he was matched he’ll be able to cancel the job during the first 5 minutes without any a penalty fee. If canceled the match-making algorithm will search for other candidates.
- Confirmation Code: When the Driver accepts the sender’s job, the sender and receiver will receive a four-digit code. This code will be required for the Driver to conclude the drop-off and mark the job as complete. (To be discussed)
- Payment system: Once the Driver has delivered the item at the drop-off point, and provided the correct confirmation code (the four-digit code) the payment will be automatically deducted from the sender’s credit card and credited to the Drivers checking account. (only for items)

With this list in mind, we started to create our product backlog and jotted down our design and technology prioritizations and requirements. We then proceeded to turn our features into sprints with a description of what needs to be done.

Iterate
After half a year of developing, testing and iteration, we launched our beta version in January 2019. Finally, we could test our assumptions in real-life case studies.
Our first delivery came from a business, that needed an on-demand parcel delivery to their partner business. As the Swiss Post would be 3x the price, as they are not made for short deliveries, they decided to try it out with us.

It worked really well and were happy to make our first real-life test! During this time, we could calculate the behavior on our app and track the first metrics from the beta users.

### Launch

After having more beta tests for different sizes in different areas, we were nearing the end of the MVP development roadmap. Slightly behind schedule, we released our app on to the IOS and Google Play Store by July. We prepared our marketing efforts and started to inform our people and network.

We had a lot of downloads and orders came in in the first months, due to our marketing and sales efforts people ordered, but the people would not come as fast, as they did during the beta.

### The outcome
We used our data we’ve gathered from the users, the revenue and we were analyzing our spending. We saw that the cost of acquiring a customer (CAQ), the lack of investments in Swiss tech-startups, the maintaining of the app and the sustainability of the business in regards to the Customer-Lifetime-Value was rather poor. Unfortunately, we have burned some money in the process of development, that made it possible to maintain but impossible to scale.

After 11 months of service operations, we decided to shut down our operations.

I occasionally get asked, how I handle the situation of failing with your own startup/business and what I learned from it. Read it down below:

1. Validation:

**What went wrong:**
We didn’t validate enough. Running a startup is basically hoping that people have a problem that needs to be solved. This can come from your experience or the interviews that you do early on, but they are still just assumptions. We thoroughly validate the driver and the sender. However, we only partially validated the receiver, which was not involved in the app. He would only receive an information SMS. Questions arose such as: What does a receiver do if a driver picks something up at his place? What if he’s not willing to make the items ready for the driver? Those questions gave us a hard time to know how to act on this problem, when we were already on the market.

**Lesson Learned:**

Validate, Validate, Validate. We would have found it helpful if we knew the true form of validating, right from the beginning and not just looking on the surface but also try to look behind the curtain. Make sure you asked and interviewed anyone who is involved in it. The sooner you validate every aspect of the business idea, the less it will hunt you later on in the process.

2. No stages targets:

**What went wrong:**
We were good at developing and making the design requirements right. However, we lost a lot of time developing ahead, without stage targets. We really only worked to finish the MVP-roadmap instead of congratulating us on the work and stage targets we had already finished. This leads to occasional exhaustion and we asked ourselves if we ever get somewhere.
Lesson Learned:
Make roadmap targets and give yourself and your co-workers a clap on the back for reaching every single goal you made yourselves. Go for drinks or celebrate, just make yourselves feel good. Building a product is not easy, so you should appreciate the time while working on it.

3. Don’t hire for the sake of it:

**What went wrong:**
During our time, we also had other people wanted to join our team. From additional engineers to business developers, we screened everyone. As for every startup, we were happy that people had interests in our project. We would check if they would be a good fit, even if their skills wouldn’t be needed at this early stage. Given our resources, we wasted a lot of time getting them into the project, just to realize that we don’t have enough to do for them or their skills were not something that was needed.

**Lesson Learned:**
Don’t hire just for the sake of it. In early projects and startups, you would be surprised, what your core team can come up with. Every new person that joins your team, will set back the team tremendously. So, make sure if you really need another hire or if you or someone on your team can do it yourself.