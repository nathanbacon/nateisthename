import * as React from "react";
import Layout from "../components/layout";
import { useStaticQuery, graphql } from "gatsby";
import GoogleSheetsChart from "../components/charts/GoogleSheetsChart";

const Dashboard = () => {
  const data = useStaticQuery(graphql`
    query GoogleSheetChartURLQuery {
      site {
        siteMetadata {
          googleSheetsCharts {
            weeklyGroceryUrl
            eatingOutUrl
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <GoogleSheetsChart
        url={data.site.siteMetadata.googleSheetsCharts.weeklyGroceryUrl}
      />
      <GoogleSheetsChart
        url={data.site.siteMetadata.googleSheetsCharts.eatingOutUrl}
      />
    </Layout>
  );
};

export default Dashboard;
