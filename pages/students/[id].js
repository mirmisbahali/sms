import { google } from "googleapis";

export async function getServerSideProps({query}) {

    const auth = await google.auth.getClient({ scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'] });

    const sheets = google.sheets({ version: 'v4', auth });

    
    const {id} = query
    const range = `Sheet1!A${id}:B${id}`

    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.SHEET_ID,
        range,
    })

    const [sid, name] = response.data.values[0]

    return {
        props: {
            sid,
            name
        }
    }
}

export default function Student({sid, name}) {
    return <>
    <h1>Student</h1>
    <h1>{sid}</h1>
    <h2>{name}</h2>
    </>
}