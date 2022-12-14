import { google } from "googleapis";
import UserDetails from "../../Components/UserDetails";
import Enrollments from "../../Components/Enrollments";
import ComLog from "../../Components/ComLog";
import Head from "next/head";

export const getStaticPaths = async () => {
  
  const data = await getData('A', 'I')
  const paths = data[0].map((i, index) => {
    return {
      params: {id: index.toString()}
    }
  })

    return {
      paths,
      fallback: false
    }
};

export async function getStaticProps(context) {
  let id = context.params.id
  id++
  const data = await getData(id.toString(), id.toString())
  const [Student_id, Name, Course, Start_Date, End_Date] = data[0]
  return {
    props: {
      Student_id,
      Name,
      Course,
      Start_Date,
      End_Date,
    },
  };
  
}

export default function Student({
  Student_id,
  Name,
  Course,
  Start_Date,
  End_Date,
}) {
  return (
    <>
      <Head>
        <title>PVS0000 Student Name</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <UserDetails Student_id={Student_id} Name={Name} />
      <div className="row">
        <div className="col-xl-4 col-lg-5 scrollbar scrollbar-primary">
          <ComLog sid={Student_id} />
        </div>
        <div className="col-xl-8 col-lg-7">
          <Enrollments />
        </div>
      </div>
    </>
  );
}


const getData = async (row, col) => {
  const auth = await google.auth.getClient({
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  const range = `Students!${row}:${col}`;
  const response = await sheets.spreadsheets.values.get({

    spreadsheetId: process.env.NEXT_PUBLIC_SHEET_ID,
    range,
  });

  return response.data.values
}