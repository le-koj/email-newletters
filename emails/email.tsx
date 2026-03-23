import { Button, Html, Head, Body, Container} from "@react-email/components";
import * as React from "react";

export default function Email() {
  return (
    <Html lang="en" dir="ltr">
            <Head>
      <title>My email title</title>
    </Head>
      <Button href="https://example.com" style={{ color: "#61dafb" }}>
        Click me
      </Button>
      <Container>
      <Button href="https://example.com" style={{ color: "#61dafb" }}>
        Click me
      </Button>
    </Container>
    </Html>
  );
}