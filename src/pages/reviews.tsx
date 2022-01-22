import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import { useStaticQuery, graphql } from "gatsby";
import { Review } from "../types/review";

const ReviewsDashboard = () => {
  const data = useStaticQuery(graphql`
    query WaniKaniReviewsQuery {
      site {
        siteMetadata {
          reviewsGoogleEndpoint
        }
      }
    }
  `);

  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    fetch(data.site.siteMetadata.reviewsGoogleEndpoint).then(async (res) => {
      const reviews = (await res.json()) as Review[];
      setReviews(reviews);
    });
  }, []);

  return (
    <Layout>
      <ul>
        {reviews.map((review) => (
          <li key={review.assignment_id}>{review.created_at}</li>
        ))}
      </ul>
    </Layout>
  );
};

export default ReviewsDashboard;
