import { useRouter } from "next/router";
import React, { useEffect } from "react";

function Index() {
  const router = useRouter();
  useEffect(() => {
    router.push("/pick");
  }, []);
  return <div></div>;
}

export default Index;
