import React from "react";

import Layout from "../components/layout";
import Hero from "../components/hero";

const CareerPage = () => {
    return (
        <Layout title="Career" description="Projects, Positions, Companies, Etc.">
            <Hero title="Career" text="In process as of 2019-12-10"/>
            <div>
                <h3>Kittyhawk.io - Director of Engineering</h3>
                <dates>???</dates>
                <location>San Francisco, CA</location>
                <p>TODO</p>
            </div>
            <div>
                <h3>Kittyhawk.io - Principal Engineering</h3>
                <dates>???</dates>
                <location>San Francisco, CA</location>
                <p>TODO</p>
            </div>
            <div>
                <h3>Stitch Labs - Senior Software Engineer</h3>
                <dates>Dec 2014 – Jul 2017</dates>
                <location>San Francisco, CA</location>
                <p>
                    Stitch is an online inventory control solution that simplifies multichannel retail business. During my time at Stitch Labs, I led a team that designed and built a subscription model enabling the company to grow from $2 million to $6+ million in annual recurring revenue. I overhauled our customer acquisition funnel, providing insight into customer behavior and increasing visibility to sales metrics. I also designed and built the underlying infrastructure to facilitate migration from a database management provider to an in-house managed solution. On a daily basis I work with cross-functional teams to accelerate the development cycle and ensure stable releases.
                </p>
            </div>
            <div>
                <h3>Stitch Labs - Software Engineer</h3>
                <dates>???</dates>
                <location>San Francisco, CA</location>
                <p>
                    TODO - Maybe remove as I was only this position fora short time before promotion?
                </p>
            </div>
            <div>
                <h3>Project: Using Historical Data To Rank The Top Magic: The Gathering Cards </h3>
                <dates>Sept 26, 2013</dates>
                <p>
                    https://news.ycombinator.com/item?id=6452056
                    https://news.ycombinator.com/item?id=7768619
                    http://tcganalytics.com/
                </p>
            </div>
            <div>
                <h3>Project: Magic: The Gathering API (mtgapi.com)</h3>
                <dates>Aug 30, 2013</dates>
                <p>
                    https://news.ycombinator.com/item?id=6300079
                </p>
            </div>
            <div>
                <h3>Project: Levers Hollywood</h3>
                <dates>July 13-14, 2013</dates>
                <p>
                    Project descriptionLevers Hollywood consumed the entire IMDb & Rotten Tomatoes databases and used graph theory to map opening weekend revenue between film, director, actor, and producer. We used this to build a multiple linear regression model that analyzed the influence of social media mentions, release date, MPAA rating, and more.

                    We ran it on a handful of upcoming films and ended up within single digit percentages of actual take in several cases.

                    https://www.hollywoodhackday.com/press.html
                    http://hollywood.leve.rs/
                </p>
            </div>
            <div>
                <h3>Levers - Lead Engineer</h3>
                <dates>Jan 2013 – Nov 2014</dates>
                <location>San Francisco, CA</location>
                <p>
                    Levers uses existing analytics data to create a prioritized list of tasks to increase revenue and customer acquisition. Forecasts of your most important metrics tell you where you'll be at the end of the month, and simple instructions tell you what to improve next. Advanced tools let you simulate changes to any campaign, revealing answers to the hardest performance questions in seconds.
                </p>
            </div>
            <div>
                <h3>VUURR - Engineer</h3>
                <dates>Oct 2012 – Nov 2014</dates>
                <location>San Francisco, CA / Arizona</location>
                <p>
                    Vuurr specializes in digital marketing campaigns and custom application development. Clients range from startups and small/medium businesses to $10+ billion enterprises. Projects included:

                    - Customer loyalty and marketing system for the tire and service industry

                    - International education system that allows users to pay for classes and receive credits towards their desired certifications

                    - Internal organizational application used to track and update printing orders from the store to delivery

                    - Marketing websites and blogs using WordPress as a framework for multiple companies and
                    organizations

                    - Political campaign website for a current United States senator

                    - Food and crafts website that has ~1.5 million sessions per month
                </p>
            </div>
        </Layout>
    );
};
export default CareerPage;
