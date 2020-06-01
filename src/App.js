import React from 'react';
import { Layout } from 'antd';


const App = () => {
  return (
    <>
      <Layout>
        <Layout.Header>
          Header
        </Layout.Header>
        <Layout.Content>
          Your can check your current rate limit and usage details by inspecting the X-RateLimit-Limit and X-RateLimit-Remaining HTTP headers that are returned on every API response. For example, if an API has the default hourly limit of 1,000 request, after making 2 requests, you will receive this HTTP header in the response of the second request:
        </Layout.Content>
        <Layout.Footer>
          Footer
        </Layout.Footer>
      </Layout>
    </>
  );
}

export default App;
