import Head from "next/head";
import Link from "next/link";
import { Slider, Input, Box } from "@mui/material";
import React from "react";

export default function Answers() {
  const [multipleChoiceValue, setMultipleChoiceValue] = React.useState(1);

  return (
    <div className="container">
      <Head>
        <title>Ngân Hàng Đề Thi Của Nhúm</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to <Link href="/questions">Ngân Hàng Đề Thi Của Nhúm</Link>
        </h1>

        <h3>Multiple Choice Slider</h3>

        <h3>Write Question Slider</h3>
      </main>
    </div>
  );
}
