import Link from "next/link";
import { useCollectionNameStore } from "../store/collectionNameStore";
import { Box, TextField, Button } from "@mui/material";

export default function Navbar() {

  const collectionName = useCollectionNameStore((state) => state.collectionName)
  const setCollectionName = useCollectionNameStore((state) => state.setCollectionName)

  const handleCollectionNameChange = (event) => {
    setCollectionName(event.target.value);
  };

  return (
    <Box sx={{pt:3, pl:3, pr:3}}>
      <nav className="navbar">
        <ul>
          <li>
            <Link href="/" style={{ textDecoration: 'none' }}>
              <Button variant="contained" sx={{border:2, borderColor:"white", backgroundColor:"green", ":hover":{backgroundColor: '#344648'}}}>Home</Button>
            </Link>
          </li>
          <li>
            <Link href="/questions" style={{ textDecoration: 'none'}}>
              <Button variant="contained" sx={{border:2, borderColor:"white", backgroundColor:"green", ":hover":{backgroundColor: '#344648'}  }}>Make Questions</Button>
            </Link>
          </li>

          <li>
            <Link href="/editQuestions" style={{ textDecoration: 'none' }}>
              <Button variant="contained" sx={{border:2, borderColor:"white", backgroundColor:"green", ":hover":{backgroundColor: '#344648'}  }}>Edit Questions</Button>
            </Link>
          </li>

          <li>
            <Link href="/viewQuestions" style={{ textDecoration: 'none' }}>
              <Button variant="contained" sx={{border:2, borderColor:"white", backgroundColor:"green", ":hover":{backgroundColor: '#344648'}  }}>All Questions Formatted</Button>
            </Link>
          </li>

        </ul>
        <Box marginTop={2}>
          <TextField
            id="write-collectionName"
            label="Enter Collection Name"
            variant="outlined"
            value={collectionName}
            onChange={handleCollectionNameChange}
            fullWidth
          ></TextField>
        </Box>
      </nav>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .navbar ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: left;
          height: 100%;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .subtitle {
          font-size: 2rem;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>
    </Box>
  );
}
