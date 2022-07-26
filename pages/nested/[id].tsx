import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import * as React from "react";
import fs from "fs";
import path from "path";
//======================================
const PageId = ({ data }: { data: any }) => {
  const { query } = useRouter();
  console.log(data);
  //======================================return
  return (
    <div>
      <h1>query.id: {query.id}</h1>
      <h2>Id: {data?.id}</h2>
      <p>{data?.body}</p>
    </div>
  );
};
export default PageId;

export const getStaticProps: GetStaticProps = async (ctx) => {
  let res = fs.readFileSync(
    "C:\\Users\\alilo\\Projects\\bug-repo\\data\\fake.json",
    { encoding: "utf8" }
  );
  const data = JSON.parse(res)?.filter(
    //   @ts-expect-error
    (o) => o.id == ctx.params.id
  )[0];
  return {
    props: { data: data || "no data" },
    revalidate: 5,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [{ params: { id: "1" } }];
  return {
    paths,
    fallback: "blocking",
  };
};
