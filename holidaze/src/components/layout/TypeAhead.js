
import "react-bootstrap-typeahead/css/Typeahead.css";
import { Typeahead } from "react-bootstrap-typeahead"; // ES2015
import { useState, useEffect } from "react";
import { Form , Container} from "react-bootstrap";
import { BASE_URL } from "../../constants/api";
import axios from "axios";


const url = BASE_URL + `/api/accommadations`;

export default function TypeAhead() {
  const [selections, setSelections] = useState([]);
  // eslint-disable-next-line
  const [accommodations, setAccommodations] = useState([]);
  // eslint-disable-next-line
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line
  const [error, setError] = useState(null);

  useEffect(function () {
    async function getAccommodations() {
      try {
        const response = await axios.get(url);
        console.log("response", response.data.data);

        setAccommodations(response.data.data);
      } catch (error) {
        console.log(error);
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }

    getAccommodations();
  }, []);

  console.log(selections);
  return (
    <>
      <Container>
        <Form.Group>
          <Typeahead
            id="accommodations"
            labelKey="name"
            onChange={setSelections}
            options={["dummy1", "dummy2", "dummy3", "dummy4"]}
            placeholder="This feature is not working (dummy data)..."
            selected={selections}
          />
          <div>{selections}</div>
        </Form.Group>
      </Container>
    </>
  );
}
