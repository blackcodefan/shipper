import { Result } from "antd";
import { H2 } from "components/heading";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

function Custom404Page() {
  return (
    <Box404>
      <Result
        status="404"
        title={<H2>404 Not Found</H2>}
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Link href="/">
            <a>Redirect</a>
          </Link>
        }
      />
    </Box404>
  );
}

export default Custom404Page;

export const Box404 = styled.div`
  min-height: calc(100vh - 150px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
